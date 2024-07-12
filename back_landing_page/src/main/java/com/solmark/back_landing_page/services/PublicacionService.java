package com.solmark.back_landing_page.services;

import com.solmark.back_landing_page.models.Publicacion;
import com.solmark.back_landing_page.repositories.PublicacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PublicacionService {

    @Autowired
    PublicacionRepository publicacionRepository;

    public ArrayList<Publicacion> getAllPublicaciones(){
        return publicacionRepository.getAllPublicaciones();
    }
}
