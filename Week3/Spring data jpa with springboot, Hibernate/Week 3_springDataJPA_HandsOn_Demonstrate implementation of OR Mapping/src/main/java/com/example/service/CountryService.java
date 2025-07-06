package com.example.service;

import com.example.model.Country;
import com.example.repository.CountryRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CountryService {

    private final CountryRepository repository;

    public CountryService(CountryRepository repository) {
        this.repository = repository;
    }

    public Country add(Country c) {
        return repository.save(c);
    }

    public List<Country> getAllCountries() {
        return repository.findAll();
    }

    public Country getCountryByCode(String code) {
        return repository.findById(code).orElse(null);
    }
}
