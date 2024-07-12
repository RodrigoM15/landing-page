package com.solmark.back_landing_page.repositories;

import com.solmark.back_landing_page.models.Publicacion;
import com.solmark.back_landing_page.util.ImageConverter;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Date;
import java.util.ArrayList;

@Repository
public class PublicacionRepository {
    ArrayList<Publicacion> publicaciones = new ArrayList<>();

    public PublicacionRepository() {
        try {
            // Load image from resources directory
            byte[] imageBytes = Files.readAllBytes(Path.of("src/main/resources/static/images/comedor.jpg"));

            publicaciones.add(new Publicacion(1, imageBytes, "Lorem ipsum dolor sit amet, conseteur sadipscing elitr", "Proin rutrum massa orci, vel imperdiet lorem imperdiet mattis. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque est felis, rutrum id ligula sit amet, molestie consequat risus. Curabitur porttitor lectus iaculis porta vulputate. Vestibulum aliquet erat ut pharetra consectetur. Donec tempor at tellus malesuada aliquam. Quisque rutrum felis massa, tincidunt dapibus nulla suscipit ac. Pellentesque enim eros, aliquet ut congue at, ullamcorper sit amet odio. Nulla porta lobortis arcu, eu vulputate metus efficitur ac. Vivamus ut augue in arcu volutpat finibus. Nullam vitae turpis aliquam, sodales nunc sed, posuere ex. Aenean malesuada suscipit ipsum, eu imperdiet turpis condimentum non.", Date.valueOf("2024-05-26"), "https://example.com/link1"));
            publicaciones.add(new Publicacion(2, imageBytes, "Lorem ipsum dolor sit amet, conseteur sadipscing elitr", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.", Date.valueOf("2024-05-26"), "https://example.com/link2"));
            publicaciones.add(new Publicacion(3, imageBytes, "Lorem ipsum dolor sit amet, conseteur sadipscing elitr", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.", Date.valueOf("2024-05-26"), "https://example.com/link3"));
            publicaciones.add(new Publicacion(4, imageBytes, "Lorem ipsum dolor sit amet, conseteur sadipscing elitr", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.", Date.valueOf("2024-05-26"), "https://example.com/link4"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public ArrayList<Publicacion> getAllPublicaciones(){
        return publicaciones;
    }
}
