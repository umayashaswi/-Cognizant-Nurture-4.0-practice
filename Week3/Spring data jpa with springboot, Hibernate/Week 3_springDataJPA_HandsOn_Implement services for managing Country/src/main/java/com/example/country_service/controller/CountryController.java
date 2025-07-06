package com.example.country_service.controller;

import com.example.country_service.model.Country;
import com.example.country_service.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryService service;

    public CountryController(CountryService service) {
        this.service = service;
    }

    @GetMapping("/{code}")
    public Country getByCode(@PathVariable String code) {
        return service.getCountryByCode(code);
    }

    @PostMapping
    public Country add(@RequestBody Country c) {
        return service.add(c);
    }

    @PutMapping("/{code}")
    public Country update(@PathVariable String code, @RequestBody Country c) {
        return service.update(code, c);
    }

    @DeleteMapping("/{code}")
    public void delete(@PathVariable String code) {
        service.delete(code);
    }

    @GetMapping("/search")
    public List<Country> search(@RequestParam("name") String name) {
        return service.search(name);
    }

}
