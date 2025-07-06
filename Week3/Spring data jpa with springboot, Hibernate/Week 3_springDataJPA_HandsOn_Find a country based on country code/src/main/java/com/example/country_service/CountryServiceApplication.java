package com.example.country_service;

import com.cognizant.spring_learn.service.exception.CountryNotFoundException;
import com.example.country_service.model.Country;
import com.example.country_service.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CountryServiceApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryServiceApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(CountryServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner testCountry(CountryService service) {
		return args -> {
			LOGGER.info("Start");
			try {
				Country c = service.findCountryByCode("IN");
				LOGGER.debug("Country: {}", c);
			} catch (CountryNotFoundException e) {
				LOGGER.error("Exception: {}", e.getMessage());
			}
			LOGGER.info("End");
		};
	}
}
