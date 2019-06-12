import * as actionTypes from '../actions/actionTypes';

const initialState = {
    transactionList:[]
}

const reducer = (state=initialState, action)=> {
    switch ( action.type ) {
        case actionTypes.FETCH_TRXN_SUCCESS: 
                return Object.assign({},state, {transactionList:action.data})
        case actionTypes.SUBMIT_TRXN_SUCCESS: 
                return { ...state, transactionList: state.transactionList.concat(action.data) }
        default:
            return state; 
    }
}
export default reducer;