import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees/all"

const EMPLOYEE_POST_API_URL= "http://localhost:8080/api/v1/employees/new"

class EmployeeService{

    getAllEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_POST_API_URL, employee)
    }
}

export default new EmployeeService()

