import React from 'react'

const Category = ({filter}) => {
return (
    <>
        <div className="container text-center">
            <button className="btn btn-outline-danger">
                all
            </button>
            <button onClick={()=>filter('burgers')} className="btn btn-outline-danger">
                burgers
            </button>
            <button className="btn btn-outline-danger">
                shakes
            </button>
        </div>
    </>
)
}

export default Category