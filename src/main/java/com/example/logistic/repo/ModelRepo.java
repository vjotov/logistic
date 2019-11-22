package com.example.logistic.repo;

import com.example.logistic.domain.Model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRepo extends JpaRepository<Model,Long> {
}
