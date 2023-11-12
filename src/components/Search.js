import '../css/Search.css'

const SearchTransactions = ({updateSearchValue, searchFunction}) => 
{
    return (  
        <form onSubmit={searchFunction}>
            <div className="search">
                <input type="search" name="search" id="search" placeholder="Search for transaction" onChange={updateSearchValue} className="form-control my-3"/>
                <button>Search</button>
            </div>
            
        </form>
    );
}
 
export default SearchTransactions;