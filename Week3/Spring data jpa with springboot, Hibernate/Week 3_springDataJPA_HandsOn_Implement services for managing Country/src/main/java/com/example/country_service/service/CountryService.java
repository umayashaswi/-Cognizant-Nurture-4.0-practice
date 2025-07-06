package com.example.country_service.service;

import com.example.country_service.model.Country;
import com.example.country_service.repository.CountryRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    private final CountryRepository repository;

    public CountryService(CountryRepository repository) {
        this.repository = repository;
    }

    public Country getCountryByCode(String code) {
        return repository.findById(code).orElse(null);
    }

    public List<Country> search(String name) {
        return repository.findByCoNameContainingIgnoreCase(name);
    }

    public Country add(Country c) {
        return repository.save(c);
    }

    public Country update(String code, Country c) {
        Optional<Country> existing = repository.findById(code);
        if (existing.isPresent()) {
            Country dbCountry = existing.get();
            dbCountry.setCoName(c.getCoName());
            return repository.save(dbCountry);
        }
        return null;
    }

    public void delete(String code) {
        repository.deleteById(code);
    }
}
