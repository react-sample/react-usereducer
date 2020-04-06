import React, { useReducer, useState } from 'react';

/* structure of a todo
{
    text: string,
    completed: boolean
}
*/

const initializeState = {
    todos: [],
    totalCount: 0
};

const reducer = (state, action) => {
    switch (action.type){
        case 'add-todo':
            return {
                todos: [...state.todos, {text: action.text, completed: false}],
                totalCount: state.totalCount + 1
            }
        case 'toggle-todo':
            return {
                todos: state.todos.map((t, idx) => {
                    return idx === action.idx ? {...t, completed: !t.completed} : t;
                }),
                totalCount: state.totalCount
            }
        default:
            return state;
    }
    
}

const TodoApp = () => {
    const [{todos, totalCount}, dispatch] = useReducer(reducer, initializeState);

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            dispatch({type: 'add-todo', text: text});
            setText('');
        }
    }

    return (
        <div style={{margin: 20}}>
            <form
                onSubmit={handleSubmit}
            >
                <input value={text} onChange={handleChange} />
            </form>
            <div>Number of todos: {totalCount}</div>
            {todos.map((t, idx) => (
                <div 
                    key={t.text} 
                    onClick={() => dispatch({type: 'toggle-todo', idx})}
                    style={{
                        textDecoration: t.completed ? 'line-through' : ''
                    }}
                >
                    {t.text}
                </div>
            ))}

        </div>
    )
}

export default TodoApp;