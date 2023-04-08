import React, { useRef } from 'react'

const Test = () => {
    const change = useRef(null);
    window.addEventListener('click', () => {
    })
return (
    <>
        <div className="container">
            <h1 ref={change}>Hello</h1>
        </div>
    </>
)
}

export default Test
