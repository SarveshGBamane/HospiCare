package com.app.service;

import com.app.model.User;

public interface UserService {

    User findByUsername(String username);

    User saveUser(User user);
}
