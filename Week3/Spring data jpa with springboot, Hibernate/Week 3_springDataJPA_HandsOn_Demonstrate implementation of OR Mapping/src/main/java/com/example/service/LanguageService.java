package com.example.service;

import com.example.model.Language;
import com.example.repository.LanguageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageService {

    private final LanguageRepository languageRepository;

    public LanguageService(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    public Language addLanguage(Language language) {
        return languageRepository.save(language);
    }

    public List<Language> getAllLanguages() {
        return languageRepository.findAll();
    }
}
