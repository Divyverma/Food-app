import { useRouter } from "next/navigation";
import { useState } from "react"


const RestaurantSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const router = useRouter();

    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSignUp=async()=>{
        // console.log(email, password, c_password, name, city, address, contact);

        if(password!=c_password){
            setPasswordError(true);
            return false;
        }else{
            setPasswordError(false);
        }

        if(!email || !password || !c_password || !name || !city || !address || !contact){
            setError(true);
            return false;
        }else{
            setError(false);
        }
        

        let response = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body:JSON.stringify({email, password, name, city, address, contact})
        })
        response = await response.json();
        console.log(response);
        if(response.success){
            console.log(response);
            const {result} = response;
            delete result.password;
            localStorage.setItem("restaurantUser",JSON.stringify(result));
            router.push('/restaurant/dashboard');
        }
    }

    return (
      <>
          <h3>SignUp</h3>
            <div>
                <div className="input-wrapper">
                    <input className="input-field" type="text" placeholder="Enter email id"
                    value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                {
                    error && !email && <span className="input-error">Please enter valid email</span>
                }
                <div className="input-wrapper">
                    <input className="input-field" type="password" placeholder="Enter password"
                    value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                {
                    passwordError && <span className="input-error">Password and Confirm Password not match</span>
                }
                {
                    error && !password && <span className="input-error">Please enter valid password</span>
                }
                <div className="input-wrapper">
                    <input className="input-field" type="password" placeholder="Confirm password"
                    value={c_password} onChange={(e)=>setC_password(e.target.value)} />
                </div>
                {
                    passwordError && <span className="input-error">Password and Confirm Password not match</span>
                }
                {
                    error && !c_password && <span className="input-error">Please enter valid Confirm password</span>
                }
                <div className="input-wrapper">
                    <input className="input-field" type="text" placeholder="Enter Restaurant Name"
                    value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                {
                    error && !name && <span className="input-error">Please enter valid Name</span>
                }
                <div className="input-wrapper">
                    <input className="input-field" type="text" placeholder="Enter City"
                    value={city} onChange={(e)=>setCity(e.target.value)} />
                </div>
                {
                    error && !city && <span className="input-error">Please enter valid City</span>
                }
                <div className="input-wrapper">
                    <input className="input-field" type="text" placeholder="Enter Full Address"
                    value={address} onChange={(e)=>setAddress(e.target.value)} />
                </div>
                {
                    error && !address && <span className="input-error">Please enter valid Address</span>
                }
                <div className="input-wrapper">
                    <input className="input-field" type="text" placeholder="Enter Contact Number"
                    value={contact} onChange={(e)=>setContact(e.target.value)} />
                </div>
                {
                    error && !contact && <span className="input-error">Please enter valid contact</span>
                }
                <div>
                    <button className="button"onClick={handleSignUp} >Login</button>
                </div>
            </div>
      </>
    )
  }
  
  export default RestaurantSignUp