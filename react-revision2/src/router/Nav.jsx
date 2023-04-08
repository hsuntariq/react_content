import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
return (
<>
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'black'}}>
        <div className="navbar-brand">
            <img style={{width:'100px'}}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurxXKU7JbSPDzVrIOESqgkWStEsW0uLRKtdtyljfI_w&s"
                alt="" />
        </div>
        <ul className="navbar-nav text-light ml-auto">
            <li className="nav-item nav-link">
                <Link to="/home">Home</Link>
            </li>
            <li className="nav-item nav-link">
                <Link to="/about">About</Link>

            </li>
            <li className="nav-item nav-link">
                <Link to="/contact">Contact</Link>

            </li>
        </ul>
    </nav>
</>
)
}

export default Nav