import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import AddTransaction from './components/AddTransaction';
import SearchTransactions from './components/Search';

function App() 
{
  //Creating a state to store the transactions fetched from the API and those that will be added by the user
  const [transactions, setTransactions]=useState([])

  //Creating a state variable to store the information filled by the user in the form to add transaction
  const [formData, setFormData]=useState(
    {
      date: "",
      description: "",
      category: "",
      amount: ""
    }
  )

  //Creating a state variable to store the search term
  const [search, setSearch]=useState("")

  //Using useEffect hook to fetch data
  useEffect(()=>
  {
    fetch("http://localhost:8000/transactions")
        .then(respone => respone.json())
        .then(transactionData => setTransactions(transactionData))
  },[])

  //Checking if transactions have been fetched and storing it in a variabl. If not, display a waiting message. Else, pass in the transactions as a prop to the Table component
  const transactionChecker= !transactions ? <div>Loading transactions</div> : <Table transactions={transactions} deleteTransaction={deleteTransaction}/>

  //Function to handle change of form input values
  const handleChange = e =>
  {
    //Getting the ID and value of the input field that will fire the change event
    const key=e.target.id
    const value = e.target.value

    //Updating the state value of the specific input field
    setFormData(
      {
        ...formData,
        [key] : value
      }
    )
  }

  //Function to handle form submission
  const formSubmit = e =>
  {
    //Preventing default form behaviour
    e.preventDefault()

    //Creating a new array by copying the original transactions array and inserting the new array 
    const newTransactionArray=[...transactions, formData]

    //Updating the state of the transactions by setting the state to equal the newly created array
    setTransactions(newTransactionArray)

    //Clearing the form data after submission
    setFormData(
      {
        date: "",
        description: "",
        category: "",
        amount: ""
      }
    )
  }

  //Function to handle the search
  const updateSearchValue= (e) =>
  {
    setSearch(e.target.value)
  }

  //Function to handle search form submission
  const searchFunction = e =>
  {
    e.preventDefault()
    console.log("Search button clicked")
    console.log(search)

    if(search === "")
    {
      setSearch("")
      setTransactions(transactions)
    }
    else
    {
      const filteredTransactions=transactions.filter((transaction)=> transaction.description === search)
      console.log(filteredTransactions)
      setTransactions(filteredTransactions)
    }
  }

  //Function to deletion of a transaction
  function deleteTransaction (id) 
  {
    const remainingTransactions=transactions.filter(transaction => transaction.id !== id)
    setTransactions(remainingTransactions)
  }
  

  return (
    <div className="App">
      <AddTransaction formSubmit={formSubmit} onValueChange={handleChange} formData={formData}/>
      <SearchTransactions updateSearchValue={updateSearchValue} searchFunction={searchFunction} />
      {transactionChecker}
    </div>
  );
}

export default App;
