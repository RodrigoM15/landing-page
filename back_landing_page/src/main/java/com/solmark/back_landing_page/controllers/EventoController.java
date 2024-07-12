package com.solmark.back_landing_page.controllers;

import com.solmark.back_landing_page.DTO.EventoDTO;
import com.solmark.back_landing_page.models.Evento;
import com.solmark.back_landing_page.services.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/eventos")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @GetMapping
    public List<EventoDTO> getAllEventos() {
        List<Evento> eventos = eventoService.getAllEventos();
        return eventos.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private EventoDTO convertToDTO(Evento evento) {
        EventoDTO dto = new EventoDTO();
        dto.setId(evento.getId());
        dto.setFecha(evento.getFecha());
        dto.setTitulo(evento.getTitulo());
        dto.setDescripcion(evento.getDescripcion());
        dto.setEnlace(evento.getEnlace());
        dto.setUbicacion(evento.getUbicacion());
        dto.setImagen(evento.getImagen());
        return dto;
    }
}
