'use client'
import CustomerHeader from "../_component/CustomerHeader"
import Footer from "../_component/Footer"
import UserSIgnUp from "../_component/UserSIgnUp"


const UserAuth = () => {
    return (
        <div>
            <CustomerHeader />
            <div className="container">
                <h1>User</h1>
                <UserSIgnUp />
            </div>
            <Footer />
        </div>

    )
}

export default UserAuth