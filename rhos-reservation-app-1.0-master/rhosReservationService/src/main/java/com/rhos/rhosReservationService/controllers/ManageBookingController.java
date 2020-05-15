package com.rhos.rhosReservationService.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rhos.rhosReservationService.models.BookTicket;
import com.rhos.rhosReservationService.services.ManageBookingService;

import io.swagger.annotations.ApiOperation;

/**
 * Microservice to manage train ticket booking
 *
 * Microservice to manage train ticket booking
 *
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/manageBooking")
public class ManageBookingController {
 // private static final Logger LOGGER = LoggerFactory.getLogger(ManageBookingController.class);

 private ManageBookingService manageBooking;

 @Autowired
 public ManageBookingController(ManageBookingService manageBooking) {
  this.manageBooking=manageBooking;
 }

 /**
  * Service to book train tickets 
  *
  * Service to book train tickets 
  *
  */
 @ApiOperation("Service to book train tickets ")
 @PostMapping("/bookTickets")
 public BookTicket bookTickets(@RequestParam("bookingId") Long bookingId,@RequestParam("ticketNo") String ticketNo,@RequestParam("journeyFrom") String journeyFrom,
		 @RequestParam("journeyTo") String journeyTo, @RequestParam("fromDate") String fromDate,
		 @RequestParam("toDate") String toDate, @RequestParam("trainName") String trainName, 
		 @RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, @RequestParam("email") String email) {
	 //Generated code 
	 return manageBooking.bookTickets(bookingId,ticketNo,journeyFrom,journeyTo,fromDate,toDate, trainName, firstName, lastName, email);
 }

 /**
  * Searches train with respect to train name,  source or destination, from date and to date
  *
  * Searches train with respect to train name,  source or destination, from date and to date
  *
  */
 @ApiOperation("Searches train with respect to train name,  source or destination, from date and to date")
 @GetMapping("/searchTrain")
 public List<String> searchTrain(@RequestParam("trainName") String trainName,
   @RequestParam("journeyFrom") String journeyFrom, @RequestParam("journeyTo") String journeyTo,
   @RequestParam("fromDate") String fromDate, @RequestParam("toDate") String toDate) {
  //Generated code 
  return manageBooking.searchTrain(trainName,journeyFrom,journeyTo,fromDate,toDate);
 }

 /**
  * Gets available seats with respect to train name,source, destination , journey from and to dates, coach class
  *
  * Gets available seats with respect to train name,source, destination , journey from and to dates, coach class
  *
  */
 @ApiOperation("Gets available seats with respect to train name,source, destination , journey from and to dates, coach class")
 @GetMapping("/seatAvailabilityCheck")
 public String seatAvailabilityCheck(@RequestParam("trainName") String trainName,
   @RequestParam("journeyFrom") String journeyFrom, @RequestParam("journeyTo") String journeyTo,
   @RequestParam("fromDate") String fromDate, @RequestParam("toDate") String toDate,
   @RequestParam("coachClass") String coachClass) {
  //Generated code 
  return manageBooking.seatAvailabilityCheck(trainName,journeyFrom,journeyTo,fromDate,toDate,coachClass);
 }

 /**
  * Manages payment of the seats booked
  *
  * Manages payment of the seats booked
  *
  */
 @ApiOperation("Manages payment of the seats booked")
 @PostMapping("/payment")
 public String Payment(@RequestParam("trainNumber") String trainNumber,
   @RequestParam("fromDate") String fromDate, @RequestParam("toDate") String toDate,
   @RequestParam("journeyFrom") String journeyFrom, @RequestParam("journeyTo") String journeyTo,
   @RequestParam("coachClass") String coachClass,
   @RequestParam("seatNumbers") List<String> seatNumbers) {
  //Generated code 
  return manageBooking.Payment(trainNumber,fromDate,toDate,journeyFrom,journeyTo,coachClass,seatNumbers);
 }

 /**
  * searches booking list with respect to PNR number
  *
  * searches booking list with respect to PNR number
  *
  */
 @ApiOperation("searches booking list with respect to PNR number")
 @GetMapping("/searchBooking")
 public List<String> searchBooking(@RequestParam("pnrNumber") String pnrNumber) {
  //Generated code 
  return manageBooking.searchBooking(pnrNumber);
 }

 /**
  * Cancel booking with respect to pnr number
  *
  * Cancel booking with respect to pnr number
  *
  */
 @ApiOperation("Cancel booking with respect to pnr number")
 @PostMapping("/cancelBooking")
 public BookTicket cancelBooking(@RequestParam("bookingId") Long bookingId) {
  //Generated code 
  return manageBooking.cancelBooking(bookingId);
 }
}
