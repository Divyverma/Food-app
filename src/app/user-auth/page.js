'use client'
import { useState } from "react"
import CustomerHeader from "../_component/CustomerHeader"
import Footer from "../_component/Footer"
import UserLogin from "../_component/UserLogin"
import UserSignUp from "../_component/UserSignUp"


const UserAuth = () => {

    const [login, setLogin] = useState(true);


    return (
        <div>
            <CustomerHeader />
            <div className="container">
                <h1>{login? "Login" : "Singup"}</h1>
                {
                    login ? <UserLogin /> : <UserSignUp />
                }
                <button className="button-link" onClick={()=>setLogin(!login)}>
                    {
                        login?"Do not have account? SingUp" : "Already have an account? LogIn"
                    }
                </button>
            </div>
            <Footer />
        </div>

    )
}

export default UserAuth