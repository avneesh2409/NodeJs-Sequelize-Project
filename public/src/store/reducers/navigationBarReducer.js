import { HOME, CONTACT, EVENT,TODO, STORE_LINK_DATA, ADD_QUESTION, DELETE_QUESTION, UPDATE_QUESTION, QRCODE_GENERATION, VEDIOCHAT } from "../constants";

const initialLinks =  {
    links:[
        {
          name: HOME,
          url: '/home',
          disabled:false
        },
        {
            name: CONTACT,
            url: `/${CONTACT.toLowerCase()}`,
            disabled:false
        },
        {
            name: EVENT,
            url: `/${EVENT.toLowerCase()}`,
            disabled:false
        }
    ]
}

const NavigationBarReducer = (state = initialLinks,action) => {
   switch(action.type){
       case STORE_LINK_DATA:
           const {links} = state.links;
           links.push(action.payload)
           return {
               ...state,
               links:links
           }
       default : return state 
   }
}

export default NavigationBarReducer;
