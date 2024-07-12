package com.solmark.back_landing_page.services;

import com.solmark.back_landing_page.models.Evento;
import com.solmark.back_landing_page.repositories.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public List<Evento> getAllEventos() {
        return eventoRepository.getAllEventos();
    }
}