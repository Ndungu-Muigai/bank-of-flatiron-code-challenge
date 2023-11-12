const AddTransaction = () => 
{
    return (  
        <form>
            <input type="date" name="date" id="date"/>
            <input type="text" name="description" id="description" placeholder="Enter transaction description"/>
            <select name="category" id="category">
                <option value="Select">Select category</option>
                <option value="Income">Income</option>
                <option value="Food">Food</option>
                <option value="Fashion">Fashion</option>
                <option value="Gift">Gift</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Housing">Housing</option>
            </select>
            <input type="number" name="amount" id="amount" min={0} placeholder="Enter transaction amount"/>
        </form>
    );
}
 
export default AddTransaction;