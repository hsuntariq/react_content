import React, { useState } from 'react'
import data from './data';

const Lorem = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        let amount = count;
        if (amount > data.length) {
            amount = data.length
        }
        let newData = data.slice(0, amount);
        setText(newData);
    }
return (
    <>
        <div className="container text-center text-capitalize">
            <h1>Let's generate lorem</h1>
            <form>
                <div className="row justify-content-center">
                    <input
                        type="text"
                        className='form-control w-25'
                        value={count}
                        onChange={(e)=>setCount(e.target.value)}
                    />
                <button onClick={handleClick} className="btn btn-info">Genrate</button>
                </div>
            </form>
            {text.map((item, index) => {
                return (
                    <>
                        <p className="text-secondary" key={index}>
                            {item}
                        </p>
                    </>
                )
            })}
        </div>
    </>
)
}

export default Lorem
