package com.example.controller;

import com.example.model.Country;
import com.example.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @PostMapping
    public Country addCountry(@RequestBody Country c) {
        return service.add(c);
    }

    @GetMapping
    public List<Country> getAll() {
        return service.getAllCountries();
    }

    @GetMapping("/{code}")
    public Country getByCode(@PathVariable String code) {
        return service.getCountryByCode(code);
    }
}
