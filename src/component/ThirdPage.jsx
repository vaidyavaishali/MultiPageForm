import { useContext } from "react"
import userContext from "./context/contextAPI"
import { Link, useNavigate } from "react-router-dom"

const SecondPage = () => {
    const { Input, setInput } = useContext(userContext)
    const navigate = useNavigate()

    const ThirdPageFun = () => {
        if (Input.education !== "" && Input.employment !== "" && Input.income !== "" && Input.marr_status !== "") {
            navigate("/summary")
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
                        <label>Education</label>
                        <select  onChange={(e) => { setInput({ ...Input, education: e.target.value }) }}>
                            <option value="">Select education</option>
                            <option value="PG">PG</option>
                            <option value="UG">UG</option>
                            <option value="deploma">Deploma</option>
                            <option value="12th">12th</option>
                        </select>

                        <label>Employment Status</label>
                        <select onChange={(e) => { setInput({ ...Input, employment: e.target.value }) }}>
                            <option value="">Select Employment Status</option>
                            <option value="web_developer">Web Developer</option>
                            <option value="full-stack-developer">Full Stack Developer</option>
                            <option value="backend-developer">Backend Developer</option>
                            <option value="front-end-developer">Front End Developer</option>
                        </select>

                    </div>
                    <div>
                        <label>Annual Income</label>
                        <select onChange={(e) => { setInput({ ...Input, income: e.target.value }) }}>
                            <option value="">Select your annual income</option>
                            <option value="below 3 lpa">below 3 lpa</option>
                            <option value="3-5 lpa">3-5 lpa</option>
                            <option value="5-7lpa">5-7lpa</option>
                            <option value="7-10lpa">7-10lpa</option>
                            <option value="above 10 lpa">above 10 lpa</option>
                        </select>

                        <label>Marrital Status</label>
                        <select onChange={(e) => { setInput({ ...Input, marr_status: e.target.value }) }}>
                            <option value="">Select Marrital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorce">Divorce</option>
                            <option value="widow">widow</option>

                        </select>
                    </div>
                </fieldset>
                <Link to="/second">
                    <button id="prev-btn">Prev</button>
                </Link>
                <button id="Next-btn" onClick={ThirdPageFun}>Next</button>
            </div>

        </div>
    )
}
export default SecondPage