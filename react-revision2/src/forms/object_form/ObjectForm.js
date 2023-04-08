import React, { useState } from 'react'

const ObjectForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name && email){
            const formData = { name, email };
            setPeople([...people, formData]);
            setName('');
            setEmail('');
        }else{
            alert('please enter all fields')
        }
    }
return (
    <>
        <div className="container w-50 m-auto mt-5 p-5">
            <form>
                <input type="text"
                    placeholder='name'
                    className="form-control mb-3"
                    value={name}
                    onChange = {(e)=>setName(e.target.value)}
                />
                <input type="email"
                    placeholder='email'
                    className="form-control mb-3"
                    value={email}
                    onChange = {(e)=>setEmail(e.target.value)}
                />
                <button onClick={handleSubmit} className='btn btn-dark form-control'>Submit</button>
            </form>
                {people.map((person) => {
                    return (
                        <>
                    <div className="card my-2 p-2">
                            <h4>{person.name}</h4>
                    </div>
                        </>
                    )
                })}
        </div>
    </>
)
}

export default ObjectForm
