import { useContext } from "react"
import userContext from "./context/contextAPI"

const Summery = () => {
    const { Input } = useContext(userContext)
    console.log(Input)
    console.log(Input.firstName)
    return (

        <div id="summary">
            <h4>View Details</h4>
            <h3>Submitting SuccessFully !!</h3>

            <div >
                <p>firstname:- {Input.firstName}</p>
                <p>LastName {Input.lastName}</p>
                <p>Email:- {Input.email}</p>
                <p>Phone {Input.phone}</p>
                <p>Date of Birth :- {Input.dob}</p>
                <p>Phone No.  :- {Input.phone}</p>
                <p>Gender :- {Input.gender}</p>
                <p> Marrital Status :- {Input.marr_status}</p>
                <p>Education :- {Input.education}</p>
                <p>Employment :- {Input.employment}</p>
                <p>Annual Income :- {Input.income}</p>
                <p>Address :- {Input.address}</p>



            </div>
        </div>

    )
}
export default Summery