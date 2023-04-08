import React, { useState } from 'react'

const Test = () => {
    const [person, setPerson] = useState({
        name:'Ali',email:'test@mail.com',age:20
    })

    const handleClick = (e) => {
        e.preventDefault();
        setPerson({...person,age:50})
    }


return (
    <>
        <div className="container">
            <h1>{person.name}</h1>
            <h1>{person.email}</h1>
            <h1>{person.age}</h1>
            <button onClick={handleClick} className="btn btn-dark">
                click
            </button>
        </div>
    </>
)
}

export default Test
