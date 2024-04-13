import Link from 'next/link'

const CustomerHeader = () => {
    return (
        <div className='header-wraper'>
            <div className='logo'>
                <img style={{ width: 100 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTklYH7PjJZ44iP2x1xK0qOYrdykU6XFyNmBnrpDLKQ&s" />
            </div>

            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>Login</Link></li>
                <li><Link href={'/'}>SignUp</Link></li>
                <li><Link href={'/'}>Cart(0)</Link></li>
                <li><Link href={'/'}>Add Restaurant</Link></li>
            </ul>
        </div>
    )
}

export default CustomerHeader