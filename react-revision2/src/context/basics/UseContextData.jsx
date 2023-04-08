import React, { createContext, useContext, useState } from 'react'
import { data } from '../../data';
const myContext = createContext();
const UseContextData = () => {
    const [myData, setMyData] = useState(data);
    const remove = (id) => {
        const newPeople = myData.filter(person => person.id !== id);
        setMyData(newPeople)
    }
return (
    <myContext.Provider value={{myData,remove}}>
        <div className="container text-center">
            <h1 className='display-1'>Hello People</h1>
            <List/>
        </div>
    </myContext.Provider>
)
}

const List = () => {
    const data = useContext(myContext);
    return(
        <>
            {data.myData.map((person) => {
                return (
                    <>
                        <SinglePerson {...person} />
                    </>
                )
            })}
        </>
    )
}

const SinglePerson = ({id,name,job,rem}) => {
    const data = useContext(myContext)

    return (
        <>
            <h6>{id}</h6>
            <h1>{name}</h1>
            <h4>{job}</h4>
            <button className="btn btn-danger" onClick={()=>data.remove(id)}>Remove</button>
        </>
    )
}  

export default UseContextData
