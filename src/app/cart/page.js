'use client'
import { useState } from "react"
import CustomerHeader from "../_component/CustomerHeader"
import Footer from "../_component/Footer"
import { DELIVERY_CHARGES, TAX } from "../lib/constant"

const Page = () => {

    const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));
    const [total] = useState(() => cartStorage.length == 1 ? cartStorage[0].price : cartStorage.reduce((a, b) => {
        return parseInt(a.price) + parseInt(b.price)
    }))
    // console.log(typeof(cartStorage[0].price));

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
                            <div className="list-item-block-">Price: {item.price}</div>
                        </div>

                    )) :
                        <h1>NO FOOD ITEMS AVAILABLER FOR NOW</h1>
                }
            </div>
            <div className="total-wrapper">
                <div className="block-1">
                    <div className="row">
                        <span>Food Charges : </span>
                        <span>{total}</span>
                    </div>
                    <div className="row">
                        <span>Tax: </span>
                        <span>{total * TAX / 100}</span>
                    </div>
                    <div className="row l-row">
                        <span>Delivery Charges: </span>
                        <span>{DELIVERY_CHARGES}</span>
                    </div>
                    <div className="row last-row">
                        <span>Total Amount: </span>
                        <span>{total + DELIVERY_CHARGES + (total * TAX / 100)}</span>
                    </div>
                </div>
                <div className="block-2">
                    <button>Order Now</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Page