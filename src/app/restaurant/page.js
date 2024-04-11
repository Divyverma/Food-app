'use client'
import { useState } from "react"
import RestaurantLogin from "../_component/RestaurantLogin"
import RestaurantSignUp from "../_component/RestaurantSignUp"
import RestaurantHeader from "../_component/RestaurantHeader"
import './style.css'
import Footer from "../_component/Footer"


const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <>
            <div className="container">
                <RestaurantHeader/>
                <h1>Restaurant Login/SignUp Page</h1>
                {
                    login ? <RestaurantLogin /> : <RestaurantSignUp />
                }
                <div>
                    <button className="button-link" onClick={() => setLogin(!login)}>{login ? "do not have account? SignUp" : "Already have account? Login"}</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Restaurant