import { useState } from "react"


const UserLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const loginHandle=()=>{
        // console.log(email, password);
    }
  return (
    <div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email" className="input-field" onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>
        <div className="input-wrapper">
            <input type="password" placeholder="Enter Password" className="input-field" onChange={(e)=>setPassword(e.target.value)} value={password} />
        </div>
        <div className="input-wrapper">
            <button onClick={loginHandle} className="button">Login</button>
        </div>
    </div>
  )
}

export default UserLogin