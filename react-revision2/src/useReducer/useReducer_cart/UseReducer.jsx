import React, { useReducer, useState } from 'react'
import Model from './Model';

const UseReducer = () => {
    // define the reducer
    const reducer = (state,action) => {
        // check for the type
        if (action.type === 'ADD_ITEM') {
                const newItems = [...state.item,action.payload]
            return {
                ...state,
                item: newItems,
                show:true,
                message:'Item Added'
            }
        }
        if (action.type === 'REMOVE_ITEM') {
                const newItems = state.item.filter((person)=>{
                    return person.id !== action.payload;
                })
            return {
                ...state,
                item: newItems,
                show:true,
                message:'Item Added'
            }
        }

    }
    const initialState = {
        item: [],
        show: false,
        message:'',
    }
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const data = {id:new Date().getTime().toString(),name}
            dispatch({type:'ADD_ITEM',payload:data})
            setName('')
        } else {
            alert('please fill out the fields')
        }
    }
return (
    <>
        <div className="container col-lg-6 m-auto">
            {state.show && <Model content={ state.message }  />}
            <form>
                <label htmlFor="">Add Item</label>
                <input type="text"
                    name=""
                    id=""
                    className='form-control'
                    value={name}
                    onChange = {(e)=>setName(e.target.value)}
                />
                <button onClick={handleSubmit} className="btn form-control mt-3 btn-secondary">
                        Add Item
                </button>
            </form>
            {state.item.map((person)=>{
                return(
                    <>
                        <h3>{person.name}</h3>
                        <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})} className="btn btn-danger">
                            remove
                        </button>
                    </>
                    )
            })}
        </div>
    </>
)
}

export default UseReducer
