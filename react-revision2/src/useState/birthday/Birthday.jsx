import React, { useState } from 'react'
import {data} from './data'
import SinglePerson from './SinglePerson'
const Birthday = () => {
    const[item,setItem] = useState(data)
    const filter = (id) => {
        setItem((per) => {
            let newList = per.filter((newPeople) => newPeople.id !== id);
            return newList;
        })
    }
return (
    <>
        <div className="container">
            {item.map((person) => {
                return (
                    <>
                        <SinglePerson {...person} filter = {filter}/>
                    </>
                )
            })}
        </div>
    </>
)
}

export default Birthday
