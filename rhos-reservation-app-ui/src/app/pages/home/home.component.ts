import { Component, OnInit, TemplateRef, OnChanges, SimpleChanges, ɵConsole, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from 'src/app/services/data-service/data.service';
import { RawData } from 'src/app/models/raw-data';
import { BookingData } from 'src/app/models/booking-data';
import { ApiService } from 'src/app/services/api-service/api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('operationModal', {static: false }) operationModal: TemplateRef<any>;
  @ViewChild('resultModal', {static: false }) resultModal: TemplateRef<any>;
  modalRef: BsModalRef;
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  rawData: RawData;
  alertMessage: string;
  resultMessage: string;
  errorFlag: boolean;
  private bookingData: BookingData;
  private config = {
    animated: true,
    class: 'modal-dialog-centered',
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  private eventMessage: string;
  constructor(private modalService: BsModalService, private data: DataService, private apiService: ApiService,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.rawData = new RawData();
    this.maxDate.setDate(this.maxDate.getDate() + 1000);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    this.errorFlag = false;

    this.data.currentEventMessage.subscribe(eventMessage => {
      this.eventMessage = eventMessage;
      if (this.eventMessage) {
        this.openModal(this.operationModal);
      }
    });
  }

  openModal(template: TemplateRef<any>, eventMessage?: string) {
    this.eventMessage = eventMessage ? eventMessage : this.eventMessage;
    this.bookingData = new BookingData();
    this.bookingData.fromStation = this.bookingData.toStation = this.bookingData.selectedTrain = '';
    if (this.eventMessage === 'cancelTicketItem' || this.eventMessage === 'pnrStatusItem') {
      this.bookingData.ticketNo = '';
      this.bookingData.bookingId = '';
    }
    this.modalRef = this.modalService.show(template, this.config);
  }

  openConfirmationModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    // this.resetBookingData();
    this.alertMessage = '';
    this.modalRef.hide();
  }

  bookTicket(bookingData: BookingData) {
    this.ngxService.start();
    this.errorFlag = false;
    const message = this.validateBookingdata(bookingData);
    if (!message) {
      this.alertMessage = '';
      this.apiService.saveBookingData(bookingData).subscribe(
        (data: BookingData) => {
        this.bookingData = data;
        }, (error) => {
            this.errorFlag = true;
        }, () => {
        }
      ).add(() => {
        this.ngxService.stop();
        this.closeModal();
        this.openConfirmationModal(this.resultModal);
      });
    } else {
      this.alertMessage = message;
      this.ngxService.stop();
    }
  }

  cancelTicket(bookingData: BookingData) {
    this.ngxService.start();
    this.errorFlag = false;
    const message = this.validateBookingdata(bookingData);
    if (!message) {
      this.alertMessage = '';
      this.apiService.cancelBooking(bookingData.bookingId).subscribe(
        (data: BookingData) => {
          this.bookingData = data;
        }, (error) => {
            this.errorFlag = true;
        }, () => {
        }
      ).add(() => {
        if (!this.bookingData) {
          this.errorFlag = true;
          this.resultMessage = 'PNR number does not exist.';
        }
        this.ngxService.stop();
        this.closeModal();
        this.openConfirmationModal(this.resultModal);
      });
    } else {
      this.alertMessage = message;
      this.ngxService.stop();
    }
  }

  getPnrStatus(bookingData: BookingData) {
    this.ngxService.start();
    this.errorFlag = false;
    const message = this.validateBookingdata(bookingData);
    if (!message) {
      this.alertMessage = '';
      this.apiService.getPnrStatus(bookingData.bookingId).subscribe(
        (data: BookingData) => {
          this.bookingData = data;
        }, (error) => {
            this.errorFlag = true;
        }, () => {
        }
      ).add(() => {
        if (!this.bookingData) {
          this.errorFlag = true;
          this.resultMessage = 'PNR number does not exist.';
        }
        this.ngxService.stop();
        this.closeModal();
        this.openConfirmationModal(this.resultModal);
      });
    } else {
      this.alertMessage = message;
      this.ngxService.stop();
    }
  }

  private validateBookingdata(bookingData: BookingData): string {
    let validationMessage: string;
    if (+bookingData.bookingId === 0) {
      validationMessage = 'Please enter a valid PNR number';
    } else if ((this.eventMessage === 'cancelTicketItem' || this.eventMessage === 'pnrStatusItem')
      && isNaN(+bookingData.bookingId)) {
      validationMessage = 'Please enter a valid PNR number';
    } else if (!(this.eventMessage === 'cancelTicketItem' || this.eventMessage === 'pnrStatusItem') &&
      !(bookingData.fromStation && bookingData.toStation && bookingData.selectedTrain &&
      bookingData.journeyDate && bookingData.firstName && bookingData.lastName && bookingData.email)) {
      validationMessage = 'Please enter the required information';
    }
    return validationMessage;
  }

  private resetBookingData() {
    this.bookingData = null;
  }

}
