package com.example.usermanagement.service;

import com.example.usermanagement.entity.User;
import com.example.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Save user
    public void addUser(User user) {
        userRepository.save(user);
    }

    // Get user by name using HQL
    public User getUserByName(String name) {
        return userRepository.findByName(name);
    }

    // Get user by email using native query
    public User getUserByEmailNative(String email) {
        return userRepository.findByEmailNative(email);
    }

    // Total user count (aggregate)
    public long getUserCount() {
        return userRepository.countUsers();
    }

    // Average age (aggregate)
    public double getAverageAge() {
        Double avg = userRepository.averageAge();
        return (avg != null) ? avg : 0.0;
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.fetchAllUsers();
    }
}
