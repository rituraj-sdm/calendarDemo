const INITIAL_STATE={

};

const user=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "USER_SUCCESS":
            return {...state, user:action.payload}
        default:
            return state;
    }
}

export default user;