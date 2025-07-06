package com.example.service;

import com.example.model.State;
import com.example.repository.StateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    private final StateRepository stateRepository;

    public StateService(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    public State addState(State state) {
        return stateRepository.save(state);
    }

    public List<State> getAllStates() {
        return stateRepository.findAll();
    }
}
