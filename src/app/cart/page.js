'use client'
import { useState } from "react"
import CustomerHeader from "../_component/CustomerHeader"
import Footer from "../_component/Footer"

const Page = () => {

    const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));

    return (
        <div>
            <CustomerHeader />
            <div className="food-item-wrapper">
                {
                    cartStorage.length > 0 ? cartStorage.map((item) => (
                        <div className="list-item">
                            <div className="list-item-block-1">
                                <img style={{ width: 100 }} src={item.img_path} />
                            </div>
                            <div className="list-item-block-2">
                                <div>{item.name}</div>
                                <div className="description">
                                    {item.description}
                                </div>
                                {
                                    <button onClick={() => removeFromCart(item._id)} >Remove From Cart</button>
                                }
                            </div>
                            <div className="list-item-block-3">Price: {item.price}</div>
                        </div>

                    )) :
                        <h1>NO FOOD ITEMS AVAILABLER FOR NOW</h1>
                }
            </div>
            <Footer />
        </div>
    )
}
export default Page