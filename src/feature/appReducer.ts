import {stateData ,actionType} from './dateType'; 

const initalState:stateData = {
    isDark:false,
    msgList:[]
}

const AppReducer = (state = initalState,action:actionType) => {
    switch(action.type){
        case'TOGGLE_THEME':
            return {
                ...state,
                isDark:!state.isDark,
                msgList:[action.payload,...state.msgList]
            }
        case 'UPDATE_MESSAGE':
            return {
                ...state,
                msgList:[action.payload,...state.msgList]
            }
        default:
            return state
       
    }
}

export default AppReducer;
