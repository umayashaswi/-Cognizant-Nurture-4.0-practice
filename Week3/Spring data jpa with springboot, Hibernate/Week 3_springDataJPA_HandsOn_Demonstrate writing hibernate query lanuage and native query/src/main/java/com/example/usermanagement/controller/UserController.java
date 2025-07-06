package com.example.usermanagement.controller;

import com.example.usermanagement.entity.User;
import com.example.usermanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Add a new user
    @PostMapping
    public String createUser(@RequestBody User user) {
        userService.addUser(user);
        return "User added successfully!";
    }

    // Get user by name using HQL
    @GetMapping("/by-name")
    public User getByName(@RequestParam String name) {
        return userService.getUserByName(name);
    }

    // Get user by email using native SQL
    @GetMapping("/by-email")
    public User getByEmail(@RequestParam String email) {
        return userService.getUserByEmailNative(email);
    }

    // Get total number of users (aggregate)
    @GetMapping("/count")
    public long getUserCount() {
        return userService.getUserCount();
    }

    // Get average age of users (aggregate)
    @GetMapping("/average-age")
    public double getAverageAge() {
        return userService.getAverageAge();
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

}
