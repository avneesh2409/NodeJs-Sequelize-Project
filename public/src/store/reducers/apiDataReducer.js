const { TODO_ADD, TODO_DELETE, TODO_UPDATE, TODO_CLEAR } = require("../constants")

const defaultState = {
    data:[]
}
/*data = [{
id:1,
payload:"hello"
}]
*/

const TodoReducer = (state=defaultState,action) =>{
let data = null;
    switch(action.type){
        case TODO_ADD:
            data = state.data
            data.push({name:action.payload})
            return {
                ...state,
                data
            }
        case TODO_DELETE:
            data = state.data;
            data.splice(action.id,1)
            return {
                ...state,
                data
            }
        case TODO_UPDATE:
            data = state.data
            data[action.id] = {name:action.payload}
            return {
                ...state,
                data
            }
        case TODO_CLEAR:
            return {...defaultState}
            
        default : return state
    }
}
export default TodoReducer