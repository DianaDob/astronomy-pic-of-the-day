package com.codecool.ask_nasa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class PictureController {

    @GetMapping
    public String getTodayPicture(){
        return "today_pic";
    }
}
