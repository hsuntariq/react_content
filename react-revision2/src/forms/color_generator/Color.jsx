import React, { useState } from 'react'
import Values from 'values.js'
import ColorGenerate from './ColorGenerate';
import './styles.css'
const Color = () => {
    const [colors, setColors] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        try {
            const color = new Values(colors).all(10)
            setError(false)
            setList(color);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }
return (
    <>
        <div className="container text-center">
            <h1>Color Generator</h1>
                <form>
            <div className="row justify-content-center">
                    <input
                        type="text"
                        className={`${error? 'danger form-control w-25 mr-2':'form-control w-25 mr-2'}`}
                        value={colors}
                        onChange = {(e)=>setColors(e.target.value)}
                    />
                <button onClick={handleClick} className='btn btn-success'>Generate</button>
            </div>
                </form>
        </div>
        <div className="container-fluid mt-5">
            <div className="row">
                {list.map((col,index) => {
                    return (
                        <>
                            <ColorGenerate hexm={col.hex} key={index} {...col} index={index} />
                        </>
                    )
                })}
            </div>
        </div>
    </>
)
}

export default Color
