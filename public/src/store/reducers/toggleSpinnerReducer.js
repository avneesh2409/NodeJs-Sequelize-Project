// import React from 'react'
import { TOGGLE_SPINNER } from '../constants';

const initial = {
    toggle:false
}
const toggleSpinnerReducer = (state=initial,action) => {
    switch(action.type){
        case TOGGLE_SPINNER:
            return {
                ...state,
                toggle:action.payload
            }
        default : return state
    }
}

export default toggleSpinnerReducer;
