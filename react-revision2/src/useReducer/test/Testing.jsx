import React, { useReducer, useState } from 'react'

const Testing = () => {
    const reducer = (state,action) => {
        if (action.type === 'INCREMENT') {
            return state + 1;
        } if (action.type === 'DECREMENT') {
            return state - 1;

        }
        // return state;
    }
    const initialState = 0;
    const [state, dispatch] = useReducer(reducer, initialState);
return (
    <>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: 'DECREMENT' })} className="btn btn-success">
            click me
        </button>
    </>
)
}

export default Testing
