package com.app.service.impl;

import com.app.model.User;
import com.app.repository.UserRepository;
import com.app.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user); // 🔥 MUST NOT RETURN NULL
    }
}
