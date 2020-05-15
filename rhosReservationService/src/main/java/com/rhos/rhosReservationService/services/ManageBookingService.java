package com.rhos.rhosReservationService.services;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rhos.rhosReservationService.models.BookTicket;
import com.rhos.rhosReservationService.repositories.BookTicketRepository;

/**
 * Microservice to manage train ticket booking
 *
 * Microservice to manage train ticket booking
 *
 */
@Service
public class ManageBookingService {
 // private static final Logger LOGGER = LoggerFactory.getLogger(ManageBookingService.class);
 
	@Autowired
	private BookTicketRepository bookTicketRepository;
	private BookTicket bookTicket;
	
 @Autowired
 public ManageBookingService() {
 }

 /**
  * Service to book train tickets 
  *
  * Service to book train tickets 
  *
  */
 public BookTicket bookTickets(Long bookingId,String ticketNo,String journeyFrom,String journeyTo,String fromDate,String toDate,String trainName,String firstName,String lastName,String email) {
  // Generated code

	bookTicket = new BookTicket();
	bookTicket.setBookingId(bookingId);
	bookTicket.setTicketNo(ticketNo);
	bookTicket.setFromStation(journeyFrom);
	bookTicket.setToStation(journeyTo);
	bookTicket.setJourneyDate(fromDate);
	bookTicket.setSelectedTrain(trainName);
	bookTicket.setFirstName(firstName);
	bookTicket.setLastName(lastName);
	bookTicket.setEmail(email);
	bookTicket.setPnrStatus("Waiting");
	try {
		bookTicketRepository.save(bookTicket);
	} catch(Exception e) {
		System.out.println("Exception Error => " + e);
	}
  return bookTicket;
 }

 /**
  * Searches train with respect to train name,  source or destination, from date and to date
  *
  * Searches train with respect to train name,  source or destination, from date and to date
  *
  */
 public List<String> searchTrain(String trainName, String journeyFrom, String journeyTo,
   String fromDate, String toDate) {
  // Generated code 
  List<String> listOfTrains = new ArrayList<>();
  return listOfTrains;
 }

 /**
  * Gets available seats with respect to train name,source, destination , journey from and to dates, coach class
  *
  * Gets available seats with respect to train name,source, destination , journey from and to dates, coach class
  *
  */
 public String seatAvailabilityCheck(String trainName, String journeyFrom, String journeyTo,
   String fromDate, String toDate, String coachClass) {
  // Generated code 
  String noOfAvailableSeats = new String();
  return noOfAvailableSeats;
 }

 /**
  * Manages payment of the seats booked
  *
  * Manages payment of the seats booked
  *
  */
 public String Payment(String trainNumber, String fromDate, String toDate, String journeyFrom,
   String journeyTo, String coachClass, List<String> seatNumbers) {
  // Generated code 
  String paymentConfirmationNumber = new String();
  return paymentConfirmationNumber;
 }

 /**
  * searches booking list with respect to PNR number
  *
  * searches booking list with respect to PNR number
  *
  */
 public List<String> searchBooking(String pnrNumber) {
  // Generated code 
  List<String> bookingList = new ArrayList<>();
  return bookingList;
 }

 /**
  * Cancel booking with respect to pnr number
  *
  * Cancel booking with respect to pnr number
  *
  */
 public BookTicket cancelBooking(Long bookingId) {
  // Generated code 
	 bookTicket = (BookTicket) bookTicketRepository.findById(bookingId).orElse(null);
	 if (bookTicket != null) {
		 bookTicket.setPnrStatus("Cancelled");
		 try {
			bookTicketRepository.save(bookTicket);
		} catch(Exception e) {
				System.out.println("Exception Error => " + e);
		}
	 }	 
  return bookTicket;
 }
}
