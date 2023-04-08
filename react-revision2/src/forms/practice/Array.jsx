import React, { useEffect, useState } from 'react'

const Array = () => {
    const [show, setShow] = useState(false);
    const hello = 'hello'
return (
    <>
        <button onClick={()=>setShow(!show)} className="btn btn-dark">
            {show? 'Hide':'Show'}
        </button>
        <h1>{show && <Item/>}</h1>
    </>
)
}

const Item = () => {
    const [size,setSize] = useState(window.innerWidth)
    const resize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    })
    return (
        <>
            <h1>{size}</h1>
        </>
    )
}

export default Array
