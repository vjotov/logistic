package com.example.logistic.controller;

import com.example.logistic.domain.Mark;
import com.example.logistic.repo.MarkRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mark")
public class MarkRestController extends AbstractRestController<Mark, MarkRepo> {
    public MarkRestController(MarkRepo repo) {
        super(repo);
    }
}
