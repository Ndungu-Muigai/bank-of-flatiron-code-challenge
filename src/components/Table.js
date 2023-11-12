const Tables = ({transactions, deleteTransaction}) => 
{
    //Mapping over the transactions object to extract individual values and saving the return value in a variabl
    const transactionData = transactions.map((transaction)=>
    {
        let {id, date, description, category, amount}=transaction
        return(
            <tr key={id}>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
                <td>
                    <button onClick={()=> deleteTransaction(id)}>Delete transaction</button>
                </td>
            </tr>
        )
    })
    return (  
        <table>
            <thead>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </thead>
            {/* Calling the variable that stored the result of the map to display it in the DOM */}
            {transactionData}
        </table>
    );
}
 
export default Tables;