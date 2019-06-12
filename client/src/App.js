import React,{ Component } from 'react';
import TransactionForm from './components/TransactionForm';


class App extends Component {

  render(){
      return (
        <div className="container">
        <TransactionForm />
         </div>
      );
  }

}

export default App;
