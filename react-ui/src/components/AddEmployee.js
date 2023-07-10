import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import EmployeeService from "../services/EmployeeService"

export default function AddEmployee() {

    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")

    const navigate = useNavigate()

    const { id } = useParams();

    const submitEmployeeData = (e) => {
        e.preventDefault()

        const employee = { firstName, lastName, email }

        if (id) {
            EmployeeService.updateEmployee(id, employee).then((res) => {
                navigate("/employees")
            }).catch(error => console.log(error))

        } else {
            // console.log(employee);
            EmployeeService.createEmployee(employee).then(res => {
                console.log(res.data)
                navigate("/employees")
            }).catch(error => console.log(error))
        }
    }

    React.useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
        }).catch(error => console.log(error))
    }, [])

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter First Name"
                                        className="form-control"
                                        value={firstName}
                                        name="firstName"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Last Name"
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={(e) => submitEmployeeData(e)}>Submit</button>
                                <Link to="/employees" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}