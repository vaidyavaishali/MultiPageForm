import { useContext } from "react"
import userContext from "./context/contextAPI"
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const FirstPage = () => {
    const { Input, setInput } = useContext(userContext)
    const navigate = useNavigate()
    const FirstPageFun = () => {
        if (Input.firstName !== "" && Input.lastName !== "" && Input.email !== "" && Input.password !== "") {
            navigate("/second")

        } else {
            alert("all field are rquired")
        }
    }

    return (
        <div id="first-main-container">
            <div id="first-page">
                <h3>Multi Step Form</h3>
                <header>
                    <div className="div-1">
                        <div className="page-no page-no-1">1</div>
                        <p className="p1">Basic Account details</p>
                        <div className="line line-1"></div>

                    </div>
                    <div className="div-1">
                        <div className="page-no page-no-2">2</div>
                        <p className="p2">Personal details</p>
                        <div className="line line-2"></div>

                    </div>
                    <div className="div-1">
                        <div className="page-no page-no-3">3</div>
                        <p className="p3">Basic Account details</p>
                    </div>

                </header>
                <fieldset>
                    <div>
                        <label>First Name</label>
                        <input type="text" onChange={(e) => { setInput({ ...Input, firstName: e.target.value }) }} />
                        <label>Email Address</label>
                        <input type="email" onChange={(e) => { setInput({ ...Input, email: e.target.value }) }} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" onChange={(e) => { setInput({ ...Input, lastName: e.target.value }) }} />

                        <label>Password</label>
                        <input type="password" onChange={(e) => { setInput({ ...Input, password: e.target.value }) }} />
                    </div>
                </fieldset>
                <button className="next-2" onClick={FirstPageFun}>Next</button>
            </div>

        </div>
    )
}
export default FirstPage