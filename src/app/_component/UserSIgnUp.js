import { useRouter } from "next/navigation";
import { useState } from "react"

const UserSIgnUp = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [c_password, setC_password] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [mobile, setMobile] = useState();
    const router = useRouter();

    const handleSignUp = async () => {
        // console.log(name, email, password, confirmPassword, city, address, mobile);
        let response = await fetch('http://localhost:3000/api/user', {
            method: 'post',
            body: JSON.stringify({ name, email, password, city, address, mobile })
        })
        response = await response.json();
        if (response.success) {
            // alert("Successfull")
            const {result}=response;
            delete result.password;
            localStorage.setItem('user',JSON.stringify(result));
            router.push('/');

        } else {
            alert("failed")
        }
    }

    return (
        <div>

            <div className="input-wrapper">
                <input className="input-field" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" value={c_password} onChange={(e) => setC_password(e.target.value)} placeholder="Confirm Password" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="phone" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Phone No." />
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={handleSignUp}>SignUp</button>
            </div>

        </div>
    )
}

export default UserSIgnUp