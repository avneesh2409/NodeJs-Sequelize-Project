import { TODO_ADD, TODO_DELETE, TODO_UPDATE, TODO_CLEAR } from "../constants"



export const storeTodoData = (payload) =>{
    return {
        type:TODO_ADD,
        payload
    }
}
export const deleteTodoData = (id) =>{
    return {
        type:TODO_DELETE,
        id
    }
}
export const updateTodoData = (id,payload) =>{
    return {
        type:TODO_UPDATE,
        id,
        payload
    }
}
export const clearTodoData = () =>{
    return {
        type:TODO_CLEAR
    }
}