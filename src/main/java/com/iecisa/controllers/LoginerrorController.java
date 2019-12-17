package com.iecisa.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginerrorController {

    @RequestMapping(value = "/loginerror")
    public final ModelAndView loginerror(HttpServletRequest request) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("loginerror");

        return modelAndView;
    }


}
