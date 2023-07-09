package com.jasmine.dev.springreact.controller;

import com.jasmine.dev.springreact.entity.Employee;
import com.jasmine.dev.springreact.exceptionhandler.RecordNotFoundException;
import com.jasmine.dev.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/new")
    public Employee createNewEmployee(@RequestBody  Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Employee with "+id+" does not exists"));
        return ResponseEntity.ok(employee);
    }
}
