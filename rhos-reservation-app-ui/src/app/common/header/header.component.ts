import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private eventMessage: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentEventMessage.subscribe(eventMessage => {
      this.eventMessage = eventMessage;
    });
  }

  doOperation(element: any) {
    this.data.sendClickEvent(element.id);
  }
}
