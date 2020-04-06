import React, { useReducer } from 'react';

const initializeState = 0;

const reducer = (state, action) => {
    switch (action.type){
        case 'inscrement':
            return state + 1;
        case 'descrement':
            return state - 1;
        default:
            return state;
    }
    
}

const SimpleReducerApp = () => {
    const [count, dispatch] = useReducer(reducer, initializeState);
    return (
        <div style={{margin: 20}}>
            <div>{count}</div>
            <button onClick={() => dispatch({type: 'inscrement'})}>Inscrement</button>
            <button onClick={() => dispatch({type: 'descrement'})}>Descrement</button>
        </div>
    )
}

export default SimpleReducerApp;