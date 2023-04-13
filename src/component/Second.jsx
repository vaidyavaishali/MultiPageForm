import { useContext } from "react"
import userContext from "./context/contextAPI"
import { Link, useNavigate } from "react-router-dom"

const SecondPage = () => {
    const { Input, setInput } = useContext(userContext)
    const navigate = useNavigate()

    const SecondPageFun = () => {
        if (Input.dob !== "" && Input.gender !== "" && Input.phone !== "" && Input.address !== "") {
            navigate("/third")

        } else {
            alert("all field are rquired")
        }
    }
    return (
        <div id="second-container">
            <div id="first-page">
                <h3>Multi Step Form</h3>
                <header>
                    <div className="div-1">
                        <div className="page-no page-no-1">1</div>
                        <p className="p1">Basic Account details</p>
                        <div className="line line-1" style={{ backgroundColor: "#141498" }}></div>

                    </div>
                    <div className="div-1">
                        <div className="page-no page-no-2" style={{ backgroundColor: "#141498" }}>2</div>
                        <p className="p2">Basic Account details</p>
                        <div className="line line-2"></div>

                    </div>
                    <div className="div-1">
                        <div className="page-no page-no-3">3</div>
                        <p className="p3">Basic Account details</p>
                    </div>

                </header>
                <fieldset>
                    <div>
                        <label>Date of birth</label>
                        <input type="date" onChange={(e) => { setInput({ ...Input, dob: e.target.value }) }} />
                        <label>Phone No.</label>
                        <input type="number" onChange={(e) => { setInput({ ...Input, phone: e.target.value }) }} />
                    </div>
                    <div className="opt-div">
                        <label>Gender</label>
                        <input type="radio" value="male" name="gender" id="male" onChange={(e) => { setInput({ Input, gender: e.target.value }) }} />
                        Male
                        <input type="radio" value="female" name="gender" onChange={(e) => { setInput({ ...Input, gender: e.target.value }) }} />Female
                        <input type="radio" value="other" name="gender" onChange={(e) => { setInput({ ...Input, gender: e.target.value }) }} />Other

                        <label>Address</label>
                        <input type="text" onChange={(e) => { setInput({ ...Input, address: e.target.value }) }} />
                    </div>
                </fieldset>
                <Link to="/">

                    <button id="prev-btn">Prev</button>
                </Link>
                <button id="Next-btn" onClick={SecondPageFun}>Next</button>
            </div>

        </div>
    )
}
export default SecondPage