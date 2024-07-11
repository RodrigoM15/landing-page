package com.solmark.back_landing_page.models;
import java.util.Date;

public class Publicacion {
    private Long id;
    private byte[] imagen;
    private String titulo;
    private String texto;
    private Date fecha;
    private String enlace;

    // Constructores
    public Publicacion() {}

    public Publicacion(Long id, byte[] imagen, String titulo, String texto, Date fecha, String enlace) {
        this.id = id;
        this.imagen = imagen;
        this.titulo = titulo;
        this.texto = texto;
        this.fecha = fecha;
        this.enlace = enlace;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getEnlace() {
        return enlace;
    }

    public void setEnlace(String enlace) {
        this.enlace = enlace;
    }
}
