const SearchTransactions = ({updateSearchValue, searchFunction}) => 
{
    return (  
        <form onSubmit={searchFunction}>
            <input type="search" name="search" id="search" placeholder="Search for transaction" onChange={updateSearchValue}/>
            <button>Search</button>
        </form>
    );
}
 
export default SearchTransactions;