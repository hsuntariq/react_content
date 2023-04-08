import React, { useEffect, useRef, useState } from 'react'

const UncontrolledInput = () => {
    const [click, setClick] = useState(0);
    const inp = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        document.title = click
        setClick(click+1)
    }


return (
    <>
        <div className="container">
            <form className="w-100 col-lg-6">
                <label htmlFor="">Name</label>
                <input type="text" className='form-control mb-4' ref={inp} />
                <button onClick={handleSubmit} className="btn btn-dark form-control">
                    submit
                </button>
            </form>
        </div>
    </>
)
}

export default UncontrolledInput
