package com.insta.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insta.entity.User;
import java.util.List;


@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	List<User> findByUserName(String userName);
}
