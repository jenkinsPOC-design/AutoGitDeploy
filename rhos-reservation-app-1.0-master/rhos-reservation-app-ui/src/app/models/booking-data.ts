export class BookingData {
    bookingId: string;
    ticketNo: string;
    fromStation: string;
    toStation: string;
    selectedTrain: string;
    journeyDate: Date;
    firstName: string;
    lastName: string;
    email: string;
    pnrStatus: string;

    constructor() {
        this.bookingId = (window.crypto.getRandomValues(new Uint32Array(1))[0]).toString();
        this.ticketNo = new Date().getTime().toString();
    }
}
