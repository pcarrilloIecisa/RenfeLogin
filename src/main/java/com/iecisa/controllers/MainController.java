package com.iecisa.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class MainController{
	@RequestMapping(value = "/main")
	public ModelAndView login(HttpServletRequest request) {
		ModelAndView  mav = new ModelAndView();
		mav.setViewName("main");
		return mav;
	}
}