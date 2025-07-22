package com.cognizant.loan;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoan(@PathVariable String number) {
        return new Loan(number, "bike", 400000, 12000, 22);
    }

    record Loan(String number, String type, double loan, double emi, int tenure) {}
}

