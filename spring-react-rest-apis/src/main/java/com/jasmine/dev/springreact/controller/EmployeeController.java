package com.jasmine.dev.springreact.controller;

import com.jasmine.dev.springreact.entity.Employee;
import com.jasmine.dev.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/all")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }
}
