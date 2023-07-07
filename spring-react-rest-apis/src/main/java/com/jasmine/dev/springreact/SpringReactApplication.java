package com.jasmine.dev.springreact;

import com.jasmine.dev.springreact.entity.Employee;
import com.jasmine.dev.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringReactApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringReactApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Yes");
//		employee.setLastName("No");
//		employee.setEmail("Yes@No.com");
//
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Jas");
//		employee1.setLastName("Mine");
//		employee1.setEmail("Jas@Mine.com");
//
//		employeeRepository.save(employee1);
	}
}
