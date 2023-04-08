import React from 'react'

const SinglePerson = ({name,email,age}) => {
return (
    <>
        <div className="row w-50 m-auto shadow my-3">
            <div className="col-lg-12">
                <h4>{ name }</h4>
                <h6>{age}</h6>
                <a href="/">{email}</a>
            </div>
        </div>
    </>
)
}

export default SinglePerson
