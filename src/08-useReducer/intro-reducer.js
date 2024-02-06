const initialState = [{
    id: 1,
    todo: 'Tarea 1',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const todo2 = {
    id: 2,
    todo: 'comer',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: todo2,
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);
