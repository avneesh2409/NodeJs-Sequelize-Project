import { TOGGLE_SPINNER } from "../constants"

export const toggleSpinner = (payload) =>{
    return {
        type:TOGGLE_SPINNER,
        payload
    }
}