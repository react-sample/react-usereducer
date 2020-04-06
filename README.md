# Overview

Sample tutorial for useReducer

## SampleReducerApp

Minimize code to demo usage of useReducer

```javascript
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
```

## TodoApp

More advance in useReducer, an simple todo application