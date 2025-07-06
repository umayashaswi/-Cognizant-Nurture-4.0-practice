package com.example.controller;

import com.example.model.Language;
import com.example.service.LanguageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/languages")
public class LanguageController {

    private final LanguageService languageService;

    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @PostMapping
    public Language add(@RequestBody Language language) {
        return languageService.addLanguage(language);
    }

    @GetMapping
    public List<Language> getAll() {
        return languageService.getAllLanguages();
    }
}
