import React, { useState } from 'react'

const ObPrac = () => {
    const [person, setPerson] = useState({
        name:'',email:'',age:''
    })
    const [people, setPeople] = useState([]);
    
    const handleClick = (e) => {
        e.preventDefault();
        const { name, email, age } = person;
        setPeople([...people,{...person}])
    }
    const change = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setPerson((prevValue) => ({
            ...prevValue,
            [name] : value,
        }))
    }
return (
    <>
        <div className="container">
            <form>
                <input type="text" name='name' placeholder='name' value={person.name} onChange={change} />
                <input type="text" name='email' placeholder='email' value={person.email} onChange={change} />
                <input type="text" name='age' placeholder='age' value={person.age} onChange={change} />
                <input onClick={handleClick} type="submit" value="submit" />
            </form>
        </div>
    </>
)
}

export default ObPrac
