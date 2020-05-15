package com.rhos.rhosReservationService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "booking_data")
public class BookTicket {

	@Id
	@Column(name="booking_Id")
	private Long bookingId;
	@Column(name="ticket_No")
	private String ticketNo;
	@Column(name="from_Station")
	private String fromStation;
	@Column(name="to_Station")
	private String toStation;
	@Column(name="selected_Train")
	private String selectedTrain;
	@Column(name="journey_Date")
	private String journeyDate;
	@Column(name="first_Name")
	private String firstName;
	@Column(name="last_Name")
	private String lastName;
	@Column(name="email")
	private String email;
	@Column(name="pnr_Status")
	private String pnrStatus;
	
	public Long getBookingId() {
		return bookingId;
	}
	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}
	public String getTicketNo() {
		return ticketNo;
	}
	public void setTicketNo(String ticketNo) {
		this.ticketNo = ticketNo;
	}
	public String getFromStation() {
		return fromStation;
	}
	public void setFromStation(String fromStation) {
		this.fromStation = fromStation;
	}
	public String getToStation() {
		return toStation;
	}
	public void setToStation(String toStation) {
		this.toStation = toStation;
	}
	public String getSelectedTrain() {
		return selectedTrain;
	}
	public void setSelectedTrain(String selectedTrain) {
		this.selectedTrain = selectedTrain;
	}
	public String getJourneyDate() {
		return journeyDate;
	}
	public void setJourneyDate(String journeyDate) {
		this.journeyDate = journeyDate;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPnrStatus() {
		return pnrStatus;
	}
	public void setPnrStatus(String pnrStatus) {
		this.pnrStatus = pnrStatus;
	}
	
}
