import React,{ Component } from 'react';

class TransactionDetailTable extends Component {
 
  render(){

    let tableRow = this.props.tableData.map(res=>{
      return <tr key={res._id}>
      <td className="col-sm-3">{res._id}</td>
      <td  className="col-sm-3">{res.userName}</td>
      <td  className="col-sm-3">{res.paymentMode}</td>
      <td  className="col-sm-3">{res.amount}</td>
    </tr> 
    })

      return (
        <div className="transactionDetailTable">
          <table className="table table-bordered">
            <thead>
            <tr> 
            <th>Transaction Id</th>
            <th>UserName</th>
            <th>Payment Mode</th>
            <th>Amount</th>
          </tr>
            </thead>
         
            <tbody>
             {tableRow}
            </tbody>

          </table>
        </div>
      );
  }

}

export default TransactionDetailTable;
