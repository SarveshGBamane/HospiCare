package com.app.controller;

import com.app.model.User;
import com.app.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

    // 🔐 LOGIN
    @PostMapping("/login")
    public String login(@RequestBody User user) {

        User dbUser = userService.findByUsername(user.getUsername());

        if (dbUser != null && dbUser.getPassword().equals(user.getPassword())) {
            return "Login successful";
        }
        return "Invalid username or password";
    }	

    // 📝 REGISTER ADMIN
    @PostMapping("/register")
    public User registerAdmin(@RequestBody User user) {

        user.setRole("ADMIN"); // force admin role
        return userService.saveUser(user);
    }
}
