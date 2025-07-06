package com.example.country_service.repository;

import com.example.country_service.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {
    List<Country> findByCoNameContainingIgnoreCase(String partialName);
}
