import React from "react"
import EmployeeService from "../services/EmployeeService"

export default function ListEmployee() {

    const [employee, setEmployee] = React.useState([])

    // const employeeData = employee.map(employee => 
    //     <tr key={employee.id}>
    //         <td>{employee.id}</td>
    //         <td>{employee.firstName}</td>
    //         <td>{employee.lastName}</td>
    //         <td>{employee.email}</td>
    //     </tr>)

    React.useEffect(()=>{
        EmployeeService.getAllEmployee().then(res => {
            setEmployee(res.data)
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className="container">
            <h1 className="text-center">List Employee</h1>
            <table className="table tabel-bordered table-stripped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </thead>
                <tbody>
                    {employee.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}