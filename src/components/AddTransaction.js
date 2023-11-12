import "../css/AddTransaction.css"

const AddTransaction = ( {formSubmit, onValueChange, formData}) => 
{
    //Destructuring the values passed on from the formData state created in the parent component
    let {date, description, category, amount} = formData
   
    return (  
        <form onSubmit={formSubmit}>
            <h1>Add Transaction Here</h1>
            <div className="inputs">
                <input type="date" name="date" id="date" onChange={onValueChange} value={date} required/>
                <input type="text" name="description" id="description" placeholder="Enter transaction description" onChange={onValueChange} required value={description}/>
                <select name="category" id="category" onChange={onValueChange} value={category} required>
                    <option value="Select">Select category</option>
                    <option value="Income">Income</option>
                    <option value="Food">Food</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Gift">Gift</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Housing">Housing</option>
                </select>
                <input type="number" name="amount" id="amount" min={0} placeholder="Enter transaction amount" onChange={onValueChange} required value={amount}/>
                <button type="submit">Add transaction</button>
            </div>
            
        </form>
    );
}
 
export default AddTransaction;