import { ADD_QUESTION, DELETE_QUESTION, CHANGE_QUESTIONS, UPDATE_QUESTION, CHANGE_QUESTION_EDIT } from "../../constants";

export function addQuestion(payload) {
    return {
        type:ADD_QUESTION,
        payload
    }
}
export function deleteQuestion(id) {
    
    return {
        type:DELETE_QUESTION,
        id
    }
}
export const updateQuestionEdit = (id,edit) =>{
    return {
        type:CHANGE_QUESTION_EDIT,
        id,
        edit
    }
}
export function updateQuestion(id,payload) {
    return {
        type:UPDATE_QUESTION,
        id,
        payload
    }
}
export function changeData(payload) {
    return {
        type:CHANGE_QUESTIONS,
        payload
    }
}