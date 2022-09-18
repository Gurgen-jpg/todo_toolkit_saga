import {todoListReducer} from "./slices/todoListSlice";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
    todoList: todoListReducer
})
export const store = configureStore({
    reducer: rootReducer,
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch