import React, { useReducer } from 'react'

const Counter = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'DECREASE':
                return state - 1;
            case 'INCREASE':
                return state + 1;
            case 'RESET':
                return 0
            default:
                alert('no such action found')
        }
    }
    const initialState = 0;
    const [state, dispatch] = useReducer(reducer, initialState);
return (
    <>
        <div className="container p-4 text-center col-lg-6 m-auto">
            <h1> {state} </h1>
            <button onClick={() => dispatch({ type: 'DECREASE' })} className="btn btn-danger mr-4">Decrease</button>
            <button onClick={() => dispatch({ type: 'RESET' })} className="btn btn-warning mr-4">Reset</button>
            <button onClick={() => dispatch({ type: 'INCREASE' })} className="btn btn-success mr-4">Increase</button>
        </div>
    </>
)
}

export default Counter
