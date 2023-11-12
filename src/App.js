import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
function App() 
{
  const [transactions, setTransactions]=useState(null)

  useEffect(()=>
  {
    fetch("http://localhost:8000/transactions")
        .then(respone => respone.json())
        .then(transactionData => setTransactions(transactionData))
  },[])

  const transactionChecker= !transactions ? <div>Loading transactions</div> : <Table transactions={transactions}/>

  return (
    <div className="App">
      {transactionChecker}
    
    </div>
  );
}

export default App;
