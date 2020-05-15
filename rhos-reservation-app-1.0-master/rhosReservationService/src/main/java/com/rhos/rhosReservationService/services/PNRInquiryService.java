package com.rhos.rhosReservationService.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rhos.rhosReservationService.models.BookTicket;
import com.rhos.rhosReservationService.repositories.BookTicketRepository;



/**
 * Microservice to get PNR details
 *
 * Microservice to get PNR details
 *
 */
@Service
public class PNRInquiryService {
 // private static final Logger LOGGER = LoggerFactory.getLogger(PNRInquiryService.class);

	@Autowired
	private BookTicketRepository bookTicketRepository;
	private BookTicket bookTicket;
	
 @Autowired
 public PNRInquiryService() {
 }

 /**
  * Gets PNR status with respect to pnr number
  *
  * Gets PNR status with respect to pnr number
  *
  */
 public BookTicket getPNRStatus(Long bookingId) {
  // Generated code 
	try {
		bookTicket = (BookTicket) bookTicketRepository.findById(bookingId).orElse(null);
	} catch(Exception e) {
		System.out.println("Exception =>" + e);
		bookTicket = null;
	}
	
  return bookTicket;
 }

 /**
  * Get ticket number with respect to pnr number
  *
  * Get ticket number with respect to pnr number
  *
  */
 public String getTicketNumber(String pnrNumber) {
  // Generated code 
  String ticketNumber = new String();
  return ticketNumber;
 }

 /**
  * Get pnr number with respect to ticket number
  *
  * Get pnr number with respect to ticket number
  *
  */
 public String getPNRNumber(String ticketNumber) {
  // Generated code 
  String pnrNumber = new String();
  return pnrNumber;
 }
}
