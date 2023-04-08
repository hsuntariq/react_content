import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import {RxHamburgerMenu,RxCross1} from 'react-icons/rx'
const Nav = () => {
    const [show, setShow] = useState(false);
    const change = useRef(null)
    const move = (e) => {
        
        // change.current.style.transform = 'translate(-50%,-50%)';
        // change.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
        // change.current.style.background = `orange`
        change.current.animate([
            { transform: `translate(${e.clientX}px,${e.clientY}px)` },
        ], {
            duration:2000
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove', move)
        return () => {
            window.removeEventListener('mousemove',move)
        }
})
return (
    <>
    <div className="ball" ref={change}></div>
        <nav onClick={()=>setShow(!show)} className=''>
            <div className="brand">
                <img style={{width:'50px'}} src="https://i.ytimg.com/an_webp/kroThUNidkQ/mqdefault_6s.webp?du=3000&sqp=CLSCraAG&rs=AOn4CLB18c3qhLiSzk2DNTTq0qBRYMXfUA" alt="" />
            </div>
            <ul className={`nav-items row justify-content-between mr-5 
                ${show?'show':'hide'}
            `}>
                <li className='mr-3'>nav item</li>
                <li className='mr-3'>nav item</li>
                <li className='mr-3'>nav item</li>
            </ul>
            <div className="icon">
                {show? <RxCross1/>:<RxHamburgerMenu/>}
            </div>
        </nav>
    </>
)
}

export default Nav
