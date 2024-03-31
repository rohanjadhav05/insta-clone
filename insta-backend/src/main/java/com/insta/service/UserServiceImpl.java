package com.insta.service;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insta.dto.UserDto;
import com.insta.entity.User;
import com.insta.mapper.InstaMapper;
import com.insta.repo.UserRepo;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	private InstaMapper mapper;
	
	public static String hashPassword(String plainPass) {
		String salt = BCrypt.gensalt();
		return BCrypt.hashpw(plainPass, salt);
	}
	
	@Override
	public UserDto addUser(UserDto userDto) {
		userDto.setUserPass(hashPassword(userDto.getUserPass()));
		User savedUser = userRepo.save(mapper.toUser(userDto));
		return mapper.toUserDto(savedUser);
	}

	@Override
	public UserDto validateUser(UserDto userDto) {
		List<User> list = userRepo.findByUserName(userDto.getUserName());
		if(list.size() != 0) {
			if(BCrypt.checkpw(userDto.getUserPass(), list.get(0).getUserPass())) {
				return mapper.toUserDto(list.get(0));
			}
			return null;
		}
		return null;
	}
}
