package com.rhos.rhosReservationService.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rhos.rhosReservationService.models.BookTicket;
import com.rhos.rhosReservationService.services.PNRInquiryService;

import io.swagger.annotations.ApiOperation;

/**
 * Microservice to get PNR details
 *
 * Microservice to get PNR details
 *
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/pnrInquiry")
public class PNRInquiryController {
 //private static final Logger LOGGER = LoggerFactory.getLogger(PNRInquiryController.class);

 private PNRInquiryService PNRInquiry;

 @Autowired
 public PNRInquiryController(PNRInquiryService PNRInquiry) {
  this.PNRInquiry=PNRInquiry;
 }

 /**
  * Gets PNR status with respect to pnr number
  *
  * Gets PNR status with respect to pnr number
  *
  */
 @ApiOperation("Gets PNR status with respect to pnr number")
 @GetMapping("/getPNRStatus")
 public BookTicket getPNRStatus(@RequestParam("bookingId") Long bookingId) {
  //Generated code 
  return PNRInquiry.getPNRStatus(bookingId);
 }

 /**
  * Get ticket number with respect to pnr number
  *
  * Get ticket number with respect to pnr number
  *
  */
 @ApiOperation("Get ticket number with respect to pnr number")
 @GetMapping("/getTicketNumber")
 public String getTicketNumber(@RequestParam("pnrNumber") String pnrNumber) {
  //Generated code 
  return PNRInquiry.getTicketNumber(pnrNumber);
 }

 /**
  * Get pnr number with respect to ticket number
  *
  * Get pnr number with respect to ticket number
  *
  */
 @ApiOperation("Get pnr number with respect to ticket number")
 @GetMapping("/getPNRNumber")
 public String getPNRNumber(@RequestParam("ticketNumber") String ticketNumber) {
  //Generated code 
  return PNRInquiry.getPNRNumber(ticketNumber);
 }
}
