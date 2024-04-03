package com.insta.mapper;

import org.springframework.stereotype.Service;

import com.insta.dto.UserDto;
import com.insta.entity.User;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class InstaMapper {
	
	public User toUser(UserDto userDto) {
		return new User(
				userDto.getUserId(),
				userDto.getUserName(),
				userDto.getUserFullName(),
				userDto.getUserPhone(),
				userDto.getUserPass(),
				userDto.getUserPost()
		);		
	}
	
	public UserDto toUserDto(User user) {
		return new UserDto(
				user.getUserId(),
				user.getUserName(),
				user.getUserFullName(),
				user.getUserPhone(),
				user.getUserPass(),
				user.getUserPost()
		);		
	}
}
