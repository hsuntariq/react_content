import React, { useState } from 'react'
import { data } from '../data';
const Drilling = () => {
    const [myData, setMyData] = useState(data);
    const remove = (id) => {
        const newPeople = myData.filter(person => person.id !== id);
        setMyData(newPeople)
    }
return (
    <>
        <div className="container text-center">
            <h1 className='display-1'>Hello People</h1>
            <List people={myData} rem = {remove} />
        </div>
    </>
)
}

const List = ({people,rem}) => {
    return(
        <>
            {people.map((person) => {
                return (
                    <>
                        <SinglePerson {...person} rem={rem} />
                    </>
                )
            })}
        </>
    )
}

const SinglePerson = ({id,name,job,rem}) => {
    return (
        <>
            <h6>{id}</h6>
            <h1>{name}</h1>
            <h4>{job}</h4>
            <button className="btn btn-danger" onClick={()=>rem(id)}>Remove</button>
        </>
    )
}  

export default Drilling
