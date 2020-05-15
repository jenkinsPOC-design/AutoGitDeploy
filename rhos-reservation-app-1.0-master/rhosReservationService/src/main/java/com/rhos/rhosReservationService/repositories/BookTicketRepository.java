package com.rhos.rhosReservationService.repositories;

import org.springframework.data.repository.CrudRepository;

import com.rhos.rhosReservationService.models.BookTicket;

public interface BookTicketRepository extends CrudRepository<BookTicket, Long> {
}
