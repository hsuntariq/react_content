import React, { useContext } from 'react'
import { AppContext } from './context'
import './styles.css'
const Modal = () => {
    const data = useContext(AppContext);
    console.log(data);
return (
    <>

        <div className={`container w-50 m-auto shadow text-center hide`}>
            <h1>I'm a Modal</h1>
        </div>
        
    </>
)
}

export default Modal
