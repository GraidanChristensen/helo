const initialState = {
    id: null,
    username: '',
    picture: ''
}

//action 
const GET_USER_DATA = 'GET_USER_DATA';

//action builder
export const getUserData = (id, username, picture) => {
    return{
        type: GET_USER_DATA,
        payload: {id, username, picture}
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER_DATA: 
            return {
                id: action.payload.id,
                username: action.payload.username,
                picture: action.payload.picture
            }
        default:
             return state;
    }
}