const initialState = {
    username: '',
    picture: ''
}

//action 
const GET_USER_DATA = 'GET_USER_DATA';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
//action builder
export const getUserData = (id, username, picture) => {
    return{
        type: GET_USER_DATA,
        payload: {id, username, picture}
    }
}

export const updateUserData = (username, picture) => {
    return{
        type: UPDATE_USER_DATA,
        payload: {username, picture}
    }
}

export const clearUserData = () => {
    return{
        type: CLEAR_USER_DATA,
        payload: {
            username: '',
            picture: ''
        }
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
        case UPDATE_USER_DATA:
            return{
                username: action.payload.username,
                picture: action.payload.picture
            }
        default:
             return state;
    }
}