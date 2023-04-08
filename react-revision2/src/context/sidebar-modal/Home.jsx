import React from 'react'
import {FaBars} from 'react-icons/fa'
const Home = () => {
return (
    <>
        <FaBars style={{
            fontSize: '3rem',
            cursor:'pointer',
            zIndex:'-1'
        }} />
        <div className={`container row justify-content-center align-items-center text-center`}>
            <button className="btn btn-dark">
                Show Modal
            </button>
        </div>
    </>
)
}

export default Home
