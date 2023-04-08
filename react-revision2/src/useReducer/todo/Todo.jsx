import React, { useReducer, useState } from 'react'
import Model from './Model';

const Todo = () => {
    const [name, setName] = useState('');
    // const [show, setShow] = useState(false);
    // const [message, setMessage] = useState('');
    // const [people, setPeople] = useState([]);
    const reducer = (state,action) => {
        if (action.type === 'ADD_ITEM') {
            let newPeople = [...state.people, action.payload];
            return {
                ...state,
                message: 'Item Added',
                model: true,
                people:newPeople
            }
        }
        if (action.type === 'RESET') {
            return {
                ...state,
                message: '',
                model: false,
            }
        }
        return state
    }
    const initialState = {
        people: [],
        message: '',
        model: false,
        name:''
    }
    const [state,dispatch] = useReducer(reducer,initialState)
    const handleClick = (e)=>{
        e.preventDefault();
        const newName = { id: new Date().getTime().toString(), name };
        dispatch({ type: 'ADD_ITEM', payload: newName });
        setName('');
        setTimeout(() => {
            dispatch({type:'RESET'});
        }, 2000);
    }
return (
    <>
        <div className="container">
            {state.model && <Model message={state.message} />}
            <form>
                <label htmlFor="">name</label>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <button onClick={handleClick} className="btn btn-dark">
                    Click
                </button>
            </form>
            {state.people.map((person)=>{
                return(
                    <>
                        <h3 key={person.id}>{person.name}</h3>
                    </>
                )
            })}
        </div>
    </>
    
)
}

export default Todo
