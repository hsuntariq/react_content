import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './styles.css'
const Sidebar = () => {
return (
    <>
        <div className="cont shadow slide-on">
            <AiOutlineClose style={{
                fontSize:'3rem',
                right: '0',
                color: 'red',
                position:'absolute'
            }}/>
        </div>
    </>
)
}

export default Sidebar
