package com.example.jwtauth.controller;

import com.example.jwtauth.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(Principal principal) {
        String username = principal.getName();  // ✅ Safe: never null if authenticated
        String token = jwtUtil.generateToken(username);
        return Map.of("token", token);
    }
}
