import React from "react"
import EmployeeService from "../services/EmployeeService"
import { Link } from "react-router-dom"

export default function ListEmployee() {

    const [employee, setEmployee] = React.useState([])

    // const employeeData = employee.map(employee => 
    //     <tr key={employee.id}>
    //         <td>{employee.id}</td>
    //         <td>{employee.firstName}</td>
    //         <td>{employee.lastName}</td>
    //         <td>{employee.email}</td>
    //     </tr>)

    const getAllEmploye = () =>{

        EmployeeService.getAllEmployee().then(res => {
            setEmployee(res.data)
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        getAllEmploye()
    }, [])

    const deleteEmployee = (employeeId) => {
        // console.log(employeeId)
        EmployeeService.deleteEmployee(employeeId).then((res) => {
            getAllEmploye()
        }).catch(error => console.log(error))

    }

    return (
        <div className="container">
            <h1 className="text-center">List Employee</h1>
            <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {employee.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link to={`/edit-employee/${employee.id}`} className="btn btn-info">Edit</Link>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=> deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}