import {TodoListInitialStateType} from "../../types/todoListTypes";
import {createSlice} from "@reduxjs/toolkit";


const initialState: TodoListInitialStateType = {
    value: 0,
}
export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {

    },
})
export const todoListReducer = todoListSlice.reducer
export const {} = todoListSlice.actions