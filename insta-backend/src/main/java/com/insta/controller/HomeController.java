package com.insta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.insta.dto.Response;
import com.insta.dto.UserDto;
import com.insta.service.UserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/home")
@CrossOrigin("*")
public class HomeController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signupUser(@Valid @RequestBody UserDto userDto, BindingResult result){
		if(result.hasErrors()) {
			String str = "";
			for(FieldError error : result.getFieldErrors()) {
				str += error.getDefaultMessage()+"\n";
			}
			return ResponseEntity.badRequest().body(str);
		}
		return Response.success(userService.addUser(userDto));	
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@Valid @RequestBody UserDto userDto, BindingResult result){
		if(result.hasErrors()) {
			String str = "";
			for(FieldError error : result.getFieldErrors()) {
				str += error.getDefaultMessage()+"\n";
			}
			return ResponseEntity.badRequest().body(str);
		}
		UserDto user = userService.validateUser(userDto);
		if(user != null) {
			return Response.success(user);
		}
		return Response.error("Login In Failed");
	}
}
