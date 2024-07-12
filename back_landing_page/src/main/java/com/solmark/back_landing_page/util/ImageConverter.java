package com.solmark.back_landing_page.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;


public class ImageConverter {
    public static byte[] convertImageToByteArray(String imagePath) throws IOException {
        // Read the image file into a BufferedImage
        BufferedImage bufferedImage = ImageIO.read(new File(imagePath));

        // Create a ByteArrayOutputStream to hold the byte data
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        // Write the BufferedImage to the ByteArrayOutputStream in the desired format (e.g., JPEG)
        ImageIO.write(bufferedImage, "jpg", baos);

        // Convert ByteArrayOutputStream to byte array
        return baos.toByteArray();
    }

    public static void main(String[] args) {
        try {
            // Replace "path/to/your/image.jpg" with the actual path to your image
            byte[] imageBytes = convertImageToByteArray("path/to/your/image.jpg");

            // Print the byte array length
            System.out.println("Image byte array length: " + imageBytes.length);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

