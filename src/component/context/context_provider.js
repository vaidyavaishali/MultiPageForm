import { useState } from "react"
import userContext from "./contextAPI"
import { useNavigate } from "react-router-dom"

const UserContextProvider = (props) => {
    const navigate = useNavigate()
    // const [data, setdata] = useState([])
    const [Input, setInput] = useState({ firstName: "", lastName: "", email: "", password: "", education: "", income: "", employment: "", marr_status: "", dob: "", gender: "", phone: "", address: "" })


   
    return (
        <userContext.Provider value={{ Input, setInput}}>
            {props.children}
        </userContext.Provider>
    )
}
export default UserContextProvider