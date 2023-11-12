const Tables = ({transactions}) => 
{
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
                    <button>Delete transaction</button>
                </td>
            </tr>
        )
    })
    return (  
        <>
          <table>
            <thead>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </thead>
            {transactionData}
          </table>
        </>
    );
}
 
export default Tables;