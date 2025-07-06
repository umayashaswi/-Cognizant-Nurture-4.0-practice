package com.example.controller;

import com.example.model.State;
import com.example.service.StateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/states")
public class StateController {

    private final StateService stateService;

    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    @PostMapping
    public State add(@RequestBody State state) {
        return stateService.addState(state);
    }

    @GetMapping
    public List<State> getAll() {
        return stateService.getAllStates();
    }
}
