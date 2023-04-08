import React, { useState } from 'react'
import { data } from './data'
import Menu from './Menu'
import Category from './Category'

const Screen = () => {
    const [items, setItems] = useState(data);
    const [category, setCategory] = useState([]);
    const filterItems = (category) => {
        const newItems = data.filter((item) => item.category === category);
        setItems(newItems)
        
    }
    
return (
    <>
        <div className="container p-3">
            <h1 className='text-center'>Our Menu</h1>
            <Category filter = {filterItems} />
            <Menu items = {items} />
        </div>
    </>
    
)
}

export default Screen