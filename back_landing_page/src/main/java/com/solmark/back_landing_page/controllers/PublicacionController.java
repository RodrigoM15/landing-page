package com.solmark.back_landing_page.controllers;

import com.solmark.back_landing_page.DTO.EventoDTO;
import com.solmark.back_landing_page.DTO.PublicacionDTO;
import com.solmark.back_landing_page.models.Evento;
import com.solmark.back_landing_page.models.Publicacion;
import com.solmark.back_landing_page.services.PublicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/publicaciones")
public class PublicacionController {

    @Autowired
    private PublicacionService publicacionService;

    @GetMapping
    public List<PublicacionDTO> getAllPublicaciones() {
        List<Publicacion> publicaciones = publicacionService.getAllPublicaciones();
        return publicaciones.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private PublicacionDTO convertToDTO(Publicacion publicacion) {
        PublicacionDTO dto = new PublicacionDTO();
        dto.setId(publicacion.getId());
        dto.setFecha(publicacion.getFecha());
        dto.setTitulo(publicacion.getTitulo());
        dto.setEnlace(publicacion.getEnlace());
        dto.setImagen(publicacion.getImagen());
        dto.setTexto(publicacion.getTexto());
        dto.setEnlace(publicacion.getEnlace());

        return dto;
    }
}
