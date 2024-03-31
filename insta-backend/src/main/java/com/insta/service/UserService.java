package com.insta.service;

import com.insta.dto.UserDto;

public interface UserService {
	public UserDto addUser(UserDto userDto);
	
	public UserDto validateUser(UserDto userDto);
}
