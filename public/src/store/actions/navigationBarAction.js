import { STORE_LINK_DATA } from "../constants"

export const navigationBarAction = (payload) => {
    return {
        type:STORE_LINK_DATA,
        payload
    }
}
