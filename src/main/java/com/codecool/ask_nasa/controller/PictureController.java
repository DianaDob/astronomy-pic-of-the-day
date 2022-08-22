package com.codecool.ask_nasa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PictureController {

    @GetMapping
    public String getTodayPicture(){
        return "today_pic";
    }

    @GetMapping("/monthly_gallery")
    public String getMonthGallery(){
        return "month_gallery";
    }
}
