import React, { useState } from 'react'

const ColorGenerate = ({rgb,weight,hexm,type,index}) => {
    const[alert,setAlert] = useState(false)
    const copyVal = ()=>{
        setAlert(true);
        navigator.clipboard.writeText(`#${hexm}`)
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    }
return (
    <>
        <div onClick={copyVal} className={`p-2 col-lg-2 mb-2 col-4 col-md-3 col-sm-4 ${index>10 && 'text-light p-2 col-lg-2 mb-2 col-4 col-md-3 col-sm-4'}`} style={{height:'100px'}}>
            <p
                style={{
                    backgroundColor: `rgb(${rgb})`, height: '100%'
                }}>
                {weight}% <br /> <span className="font-weight-bolder">
                #{hexm}
                </span> 
                <p className="text-secondary"> {alert && 'Copied To Clipboard'}</p>
            </p>
        </div>
    </>
)
}

export default ColorGenerate
