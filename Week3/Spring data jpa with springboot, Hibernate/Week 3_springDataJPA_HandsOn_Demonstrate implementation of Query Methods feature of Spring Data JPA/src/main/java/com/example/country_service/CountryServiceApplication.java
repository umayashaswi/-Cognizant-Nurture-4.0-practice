package com.example.country_service;

import com.cognizant.spring_learn.service.exception.CountryNotFoundException;
import com.example.country_service.model.Country;
import com.example.country_service.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CountryServiceApplication implements CommandLineRunner {

	@Autowired
	private CountryService countryService;

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryServiceApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(CountryServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		testAddCountry();
	}

	private void testAddCountry() {
		LOGGER.info("Start");

		try {
			// Step 1: Create new Country
			Country country = new Country();
			country.setCoCode("FXY");
			country.setCoName("Fantaxyland");

			// Step 2: Add country
			countryService.addCountry(country);

			// Step 3: Fetch and log
			Country fetched = countryService.findCountryByCode("FXY");
			LOGGER.debug("Added Country: {}", fetched);
		} catch (CountryNotFoundException e) {
			LOGGER.error("Exception: {}", e.getMessage());
		}

		LOGGER.info("End");
	}
}
