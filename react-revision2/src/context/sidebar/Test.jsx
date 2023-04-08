import React, { useContext } from 'react'
import { AppContext } from './Context'

const Test = () => {
    const{show,setShow} = useContext(AppContext)
return (
    <>
        <button onClick={()=>setShow(!show)} className="btn btn-dark">
            Press Me
        </button>
        {console.log(show)}
    </>
)
}

export default Test
