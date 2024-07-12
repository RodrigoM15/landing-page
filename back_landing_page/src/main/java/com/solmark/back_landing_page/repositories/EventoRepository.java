package com.solmark.back_landing_page.repositories;

import com.solmark.back_landing_page.models.Evento;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class EventoRepository {

    // In-memory storage
    private List<Evento> eventos = new ArrayList<>();

    public EventoRepository() {
        try {
            // Assuming "comedor.jpg" is the image you want to use for all events
            byte[] imageBytes = Files.readAllBytes(Path.of("src/main/resources/static/images/comedor.jpg"));

            eventos.add(new Evento(1, Date.valueOf("2024-06-15"), "Lorem ipsum", "Proin rutrum massa orci, vel imperdiet lorem imperdiet mattis.", "enlace.descarga", "Lorem ipsum dolor sit amet, conseteur", imageBytes));
            eventos.add(new Evento(2, Date.valueOf("2024-06-24"), "Lorem ipsum dolor", "Vivamus ut augue in arcu volutpat finibus. Nullam vitae turpis aliquam, sodales nunc sed, posuere ex.", "enlace.descarga", "Lorem ipsum dolor sit amet, conseteur", imageBytes));
            eventos.add(new Evento(3, Date.valueOf("2024-06-27"), "Lorem ipsum dolor sit amen", "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque est felis, rutrum id ligula sit amet.", "enlace.descarga", "Lorem ipsum dolor sit amet, conseteur", imageBytes));
            eventos.add(new Evento(4, Date.valueOf("2024-06-30"), "Lorem ipsum dolor sit amen, consetetur", "Aenean malesuada suscipit ipsum, eu imperdiet turpis condimentum non.", "enlace.descarga", "Lorem ipsum dolor sit amet, conseteur", imageBytes));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Evento> getAllEventos() {
        return eventos;
    }
}
