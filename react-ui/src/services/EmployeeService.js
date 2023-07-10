import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees"


class EmployeeService{

    getAllEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+"/"+id)
    }

    updateEmployee(employeeId, employeeData){
        return axios.put(EMPLOYEE_BASE_REST_API_URL+"/"+employeeId, employeeData)
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+"/"+employeeId)
    }
}

export default new EmployeeService()

