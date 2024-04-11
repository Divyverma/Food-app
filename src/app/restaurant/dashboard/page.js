'use client'
import RestaurantHeader from "@/app/_component/RestaurantHeader"
import './../style.css'
import AddFoodItem from "@/app/_component/AddFoodItem"
import { useState } from "react"

const Dashboard = () => {
    const [addItem, setAddItem] = useState(false);
    return (<div className="container">
        <RestaurantHeader />
        <button onClick={()=>setAddItem(true)}>Add food</button>
        <button onClick={()=>setAddItem(false)}>Dashboard</button>
        {
            addItem?<AddFoodItem/>:<h1>Welcome to Dashboard</h1>
        }
        
    </div>)
}

export default Dashboard