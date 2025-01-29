const initialstate={
    task:[]
}

export const userReducer=(state=initialstate,action)=>{
switch(action.type){
    case 'CREATE_TASK':
    return{
        ...state,
      task:[...state.task,action.payload]
    }
    case 'UPDATE_TASK':
        return{
            
        }
    default:
        return state;
        

}

}

