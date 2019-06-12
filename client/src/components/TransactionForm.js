import React, { Component } from 'react';
import LineChart,{ parseFlatArray } from 'react-linechart';
import axios from 'axios';
import TransactionDetailTable from './TransactionDetailTable';
import { connect } from 'react-redux';
import * as actions from '../store/actions/trxnAction';

class TransactionForm extends Component {
    state ={
        userName:'',
        paymentMode:'',
        amount:'',
        transferBtnEnable:false
    }

    componentDidMount = () =>{
        this.props.onFetchTrxnData();
    }
    submitBookHandler = (e) => {
        let transactionObj = {
                "userName": this.state.userName,
                "paymentMode": this.state.paymentMode,
                "amount": this.state.amount
        }
        this.props.onSubmitTrxnData(transactionObj);
        e.preventDefault();
    }

    handleChange = e => {
        const { name, value } = e.target;
        console.log(name +"--" + value)
        this.setState({
          [name]: value
        });       
    };

    render(){
        let table = null
        if(this.props.transactionList.length> 0){
            table = <TransactionDetailTable tableData = {this.props.transactionList}/>
        }
        
        return (
            <>
            <div className="row transactionForm">
                <form>
                    <div className="col-sm-4 userName">
                        <label> User</label>
                        <select value={this.state.userName} name="userName" onChange={this.handleChange}>
                        <option value="">Select User</option>
                            <option value="Max">Max</option>
                            <option value="Manu">Manu</option>
                            <option value="John">John</option>
                        </select>
                    </div>
                    <div className="col-sm-4 radioinput">
                           <label> Payment Type : </label>
                           <label className="entryName"> <input type="radio" name="paymentMode" value="American Express" onChange={this.handleChange} />AMerican Express</label>
                           <label className="entryName"><input type="radio" name="paymentMode"  value="Visa"  onChange={this.handleChange} />Visa</label>
                           <label className="entryName"><input type="radio" name="paymentMode"  value="DBS Payla" onChange={this.handleChange} />DBS Payla</label>
                    </div>

                    <div className="col-sm-4 amountDiv">
                        <label> Amount : </label>
                        <input name="amount" type="number" onChange={this.handleChange}/>
                        <button className="btn btn-primary" 
                         onClick={this.submitBookHandler}
                         disabled={this.state.transferBtnEnable}>Transfer </button>
                    </div>

                </form>
            </div>
             {table}
             </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactionList: state.trxn.transactionList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchTrxnData: () => dispatch( actions.fetchTransactionDetails() ),
        onSubmitTrxnData :(data) => dispatch(actions.submitTransactionData(data))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(TransactionForm);