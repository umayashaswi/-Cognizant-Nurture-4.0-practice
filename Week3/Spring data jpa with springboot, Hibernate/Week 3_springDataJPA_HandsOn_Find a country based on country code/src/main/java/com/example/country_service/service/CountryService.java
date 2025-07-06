package com.example.country_service.service;

import com.cognizant.spring_learn.service.exception.CountryNotFoundException;
import com.example.country_service.model.Country;
import com.example.country_service.repository.CountryRepository;
import jakarta.transaction.Transactional;
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

    @Transactional
    public Country findCountryByCode(String countryCode) throws CountryNotFoundException {
        Optional<Country> result = repository.findById(countryCode);
        if (!result.isPresent()) {
            throw new CountryNotFoundException("Country not found with code: " + countryCode);
        }
        return result.get();
    }

    public void delete(String code) {
        repository.deleteById(code);
    }
}
