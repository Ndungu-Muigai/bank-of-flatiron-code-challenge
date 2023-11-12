const SearchTransactions = ({updateSearchValue, searchFunction}) => 
{
    return (  
        <form onSubmit={searchFunction}>
            <input type="search" name="search" id="search" placeholder="Search for transaction" onChange={updateSearchValue} className="form-control my-3"/>
            <button>Search</button>
        </form>
    );
}
 
export default SearchTransactions;