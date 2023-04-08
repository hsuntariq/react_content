import React, { useEffect, useState } from 'react'

const Basics = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect log')
    },[count])
    console.log('normal console')
    const handleClick = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('useEffect 2')
    },[])
return (
    <>
        <button onClick={handleClick} className="btn btn-danger">
            click me
        </button>
    </>
)
}

export default Basics