import { ADD_QUESTION, DELETE_QUESTION, UPDATE_QUESTION,CHANGE_QUESTIONS, CHANGE_QUESTION_EDIT } from "../../constants"

const initialData = {
    data:[
    {
        id: 1,
        question: "hello this is question",
        edit:true,
        options: [
            {
                oid: 1,
                borderColor:'red',
                check: false,
                text: "this is your answer key"
            },
            {
                oid: 2,
                check: false,
                text: "this is your answer key"
            },
            {
                oid: 3,
                check: false,
                text: "this is your answer key"
            },
            {
                oid: 4,
                check: false,
                text: "this is your answer key"
            }
        ]
    }
]
}

export const ExamReducer = (state = initialData,action) => {
    switch(action.type)
    {
        case ADD_QUESTION:
            state.data.push(action.payload)
            return {
                ...state,
                data:state.data
            }
        case DELETE_QUESTION:
            return {
                ...state,
                data:state.data.filter(x=>x.id!==action.id)
            }
        case UPDATE_QUESTION:
            for (var i in state.data) {
                if (state.data[i].id === action.id) {
                   state.data[i].question = action.payload;
                   break;
                }
            }
            return {
                ...state,
                data:state.data
            }
        case CHANGE_QUESTION_EDIT:
            state.data.forEach((e,i)=>{
                if(e.id===action.id){
                    state.data[i].edit = action.edit
                }
            })
            return {
                ...state,
                data:state.data
            }
        case CHANGE_QUESTIONS:
            return {
                ...state,
                data:action.payload
            }
        default:return state
    }
}
