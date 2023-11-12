import '../css/Table.css'

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
                    <button type="button" onClick={()=> deleteTransaction(id)}>Delete transaction</button>
                </td>
            </tr>
        )
    })
    return (  
        <table>
            <thead>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
            </thead>
            {/* Calling the variable that stored the result of the map to display it in the DOM */}
            {transactionData}
        </table>
    );
}
 
export default Tables;