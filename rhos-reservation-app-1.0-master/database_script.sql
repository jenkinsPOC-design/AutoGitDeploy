CREATE SCHEMA `rhos_reservation_db_redhat001` ;

CREATE TABLE `rhos_reservation_db`.`bookticket` (
  `bookingId` VARCHAR(32) NOT NULL,
  `ticketNo` VARCHAR(64) NOT NULL,
  `fromStation` VARCHAR(100) NOT NULL,
  `toStation` VARCHAR(100) NOT NULL,
  `selectedTrain` VARCHAR(512) NOT NULL,
  `journeyDate` VARCHAR(100) NOT NULL,
  `firstName` VARCHAR(256) NOT NULL,
  `lastName` VARCHAR(256) NOT NULL,
  `email` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`bookingId`))
ENGINE = InnoDB;
