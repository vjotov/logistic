package com.example.logistic.controller;

import com.example.logistic.domain.Car;
import com.example.logistic.repo.CarRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/car")
public class CarRestControler extends AbstractRestController<Car, CarRepo> {
    public CarRestControler(CarRepo repo) {
        super(repo);
    }
}
