import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees/all"

export default class EmployeeService{

    getAllEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
}

