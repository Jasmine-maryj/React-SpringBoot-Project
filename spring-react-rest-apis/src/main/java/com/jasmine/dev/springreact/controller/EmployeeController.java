package com.jasmine.dev.springreact.controller;

import com.jasmine.dev.springreact.entity.Employee;
import com.jasmine.dev.springreact.exceptionhandler.RecordNotFoundException;
import com.jasmine.dev.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }

    @PostMapping
    public Employee createNewEmployee(@RequestBody  Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Employee with "+id+" does not exists"));
        return ResponseEntity.ok(employee);
    }
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeData){
        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new RecordNotFoundException("Employee with "+id+" does not exists"));
        employee.setFirstName(employeeData.getFirstName());
        employee.setLastName(employeeData.getLastName());
        employee.setEmail(employee.getEmail());
        employeeRepository.save(employee);
        return ResponseEntity.ok(employee);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Employee with "+id+" does not exists"));

        employeeRepository.deleteById(id);

        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }
}
