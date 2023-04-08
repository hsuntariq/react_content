import React, { useState } from 'react'

const Test = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, email };
        setPeople([...people, formData]);
    }
return (
    <>
        <div className="container">
            <form action="" className='col-lg-6 m-auto'>
                <input type="text"
                    className='form-control mb-3'
                    name='name'
                    placeholder='name'
                    value={name}
                    onChange = {(e)=>setName(e.target.value)}
                />
                <input
                    className='form-control mb-3'
                    type="text"
                    name='email'
                    placeholder='email'
                    value={email}
                    onChange = {(e)=>setEmail(e.target.value)}
                />
                <button onClick = {handleSubmit} className="btn btn-dark">submit</button>
            </form>
        </div>
    </>
)
}

export default Test