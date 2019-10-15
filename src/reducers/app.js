const INITIAL_STATE={

};

const app=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SCREEN_LISNER":
            return {...state, screen:action.payload}
        default:
            return state;
    }
}

export default app;