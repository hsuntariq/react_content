import React from 'react'

const SinglePerson = ({name,date,id,filter}) => {
return (
    <>
        <h4>{name}</h4>
        <h4>{date}</h4>
        <button onClick={()=>filter(id)} className="btn btn-danger">remove</button>
    </>
)
}

export default SinglePerson
