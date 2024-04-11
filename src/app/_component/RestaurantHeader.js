'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const RestaurantHeader = () => {
    const [details, setDetails] = useState();
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        let data = localStorage.getItem("restaurantUser");
        if (!data && pathName=="/restaurant/dashboard") {
            router.push("/restaurant")
        }else if(data && pathName=="/restaurant" ){
            router.push('/restaurant/dashboard');
        } else {
            setDetails(JSON.parse(data))
        }
    },[]);
    const logout=()=>{
        localStorage.removeItem("restaurantUser");
    }
    return (
        <div className='header-wraper'>
            <div className="logo">
                <img style={{ width: 100 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTklYH7PjJZ44iP2x1xK0qOYrdykU6XFyNmBnrpDLKQ&s" />
            </div>
            <ul>
                <li> <Link href='/'>Home</Link></li>
                {
                    details && details.name ?
                        <>
                            <li><button onClick={logout}>Logout</button></li>
                            <li><Link href='/'>Profile</Link></li>
                        </>
                        : <li><Link href='/'>Login/SignUp</Link></li>
                }
            </ul>
        </div>
    )
}

export default RestaurantHeader