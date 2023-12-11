import { createSlice } from "@reduxjs/toolkit"
import getTask from "../../utils/getTask"

const initialState = { todos: [...getTask()], count: 0, }

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo(state,action){
            state.todos = state.todos.filter(t => t.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateTodo(state,action){
            
        const current = state.todos.find(t => t.id === action.payload);
        current.isCompleted = !current.isCompleted;
        localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    },
})

export default taskSlice.reducer;
export const { addTodo,removeTodo,updateTodo } = taskSlice.actions;
