import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchTransactionDetails  = () => {
    return dispatch => {
        axios.get('/api/transaction')
            .then( res => {
                dispatch(fetchTrxnSuccess(res.data));
            } )
    };
};


export const fetchTrxnSuccess = ( data ) => {
    return {
        type: actionTypes.FETCH_TRXN_SUCCESS,
        data: data
    };
};


export const submitTransactionData  = (data) => {
    return dispatch => {
        axios.post( '/api/transaction', data)
            .then( res => {
                dispatch(submitTrxnSuccess(res.data));
            } )
    };
};


export const submitTrxnSuccess = ( data ) => {
    return {
        type: actionTypes.SUBMIT_TRXN_SUCCESS,
        data: data
    };
};