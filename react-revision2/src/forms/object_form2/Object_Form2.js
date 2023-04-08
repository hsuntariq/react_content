import React, { useState } from 'react'
import SinglePerson from './SinglePerson';

const Object_Form2 = () => {
    const [person, setPerson] = useState({
        name:'',email:'',age:'',
    })
    const [people, setPeople] = useState([]);
    const onChange = (e) => {
        setPerson((prevVal) => ({
                ...prevVal,
            [e.target.name]: e.target.value
        }))   
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, age } = person;
        if (name && email && age) {
            setPeople([...people,{...person}])
            console.log([...people]);
            setPerson({ name: '', email: '', age: '' });
    }else{
            alert('please fill out the entire form');
    }
    }
return (
    <>
        <div className="container col-lg-6 mt-4">
            <form className='p-3 border shadow'>
                <label htmlFor="">Name</label>
                <input type="text"
                    placeholder='Name'
                    className= "form-control mb-3"
                    name='name'
                    value={person.name}
                    onChange = {onChange}
                />
                <label htmlFor="">Email</label>
                <input type="email"
                    placeholder='Email'
                    className= "form-control mb-3"
                    name='email'
                    value={person.email}
                    onChange = {onChange}
                />
                <label htmlFor="">Age</label>
                <input type="text"
                    placeholder='Age'
                    className= "form-control mb-3"
                    name='age'
                    value={person.age}
                    onChange = {onChange}
                />
                <button onClick = {handleSubmit} className="brn btn-outline-danger form-control">
                    Submit
                </button>
            </form>
        </div>
        <div className="container">
            {people.map((item) => {
                return (
                    <>
                        <SinglePerson {...item} />
                    </>
                )
            })}
        </div>
    </>
)
}

export default Object_Form2
