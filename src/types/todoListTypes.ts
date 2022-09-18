import {TaskType} from "./tasksType";

export type TodoListInitialStateType = {
    value: number

}
export type TodoListType = {
    id: string
    headTitle: string
    tasks: TaskType[]
}