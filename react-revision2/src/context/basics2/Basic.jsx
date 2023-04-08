import React, { createContext, useContext, useState } from 'react'
import {data} from '../../data'
const myPerson = createContext();
const Basic = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        const newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople)
    }
return (
    <myPerson.Provider value={{
        people,removePerson,
    }}>
        <div className="container text-center">
            <h1 className='display-1'>Context Basics</h1>
                <List />
        </div>
    </myPerson.Provider>
)
}
const List = () =>{
    const {people} = useContext(myPerson);
    return(
        <>
        {people.map((person)=>{
            return(
            <>
            <div className="mb-1 row border shadow p-4">
                <SinglePerson {...person} />
            </div>
            </>
            )
        })}
        </>
    )
}

const SinglePerson = ({id,name,job}) => {
    const {removePerson} = useContext(myPerson);
    return(
        <>
                <div className="col-lg-4">
                    {name}
                </div>
                <div className="col-lg-4">
                    {job}
                </div>
                <div className="col-lg-4">
                    <button onClick={()=>removePerson(id)} className="btn btn-danger">remove</button>
                </div>
        </>
    )
}

export default Basic
