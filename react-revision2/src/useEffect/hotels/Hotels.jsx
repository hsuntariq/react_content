import React, { useEffect, useState } from 'react'

const Hotels = () => {
    const url = 'https://api.github.com/users'
    const [hotels, setHotels] = useState();
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setHotels(data)
        console.log(hotels)
    }
    useEffect(() => {
        fetchData();
    },[])
return (
    <>
        {/* {hotels.map((item)=>{
            return(
                <>
                    <h1>{item.id}</h1>
                </>
            )
        })} */}
    </>
)
}

export default Hotels
