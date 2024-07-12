package com.solmark.back_landing_page;

import com.solmark.back_landing_page.services.EventoService;
import com.solmark.back_landing_page.services.PublicacionService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackLandingPageApplication {

	@Autowired
	EventoService eventoService;

	@Autowired
	PublicacionService publicacionService;

	public static void main(String[] args) {
		SpringApplication.run(BackLandingPageApplication.class, args);
	}
}
