import React, { useEffect, useState } from 'react'

const Screen = () => {
    const [size,setSize] = useState(window.innerWidth)
    const setResize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', setResize);
        console.log('useEffect')
        return () => {
            window.removeEventListener('resize',setResize)
            console.log('cleanup function')
        }
    })
return (
    <>
        <h1>{size} px</h1>
    </>
)
}

export default Screen
