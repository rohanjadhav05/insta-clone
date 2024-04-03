package com.insta.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

	private Long userId;
	private String userName;
	private String UserFullName;
	private String userPhone;
	private String userPass;
	private Long userPost;
}
