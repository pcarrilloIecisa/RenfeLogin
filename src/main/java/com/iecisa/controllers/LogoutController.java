package com.iecisa.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletRequest;

@Controller
public class LogoutController {

    @RequestMapping(value = "/logout")
    public final ModelAndView logout(HttpServletRequest request ) {

        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();
        }
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("logout");

        return modelAndView;
    }
}
