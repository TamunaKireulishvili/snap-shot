import {useState} from 'react';
import './style.css';
import SearchImg from './img/search.png';

const Search = ({handleSearch}) => {
    const [inputValue,setInputValue] = useState();

    return (
       
        <form className="search"  onSubmit={(e) =>{
            e.preventDefault()

             handleSearch(inputValue)}}>
            <input type="text" 
            placeholder="Search..." 
            value={inputValue}
            onChange={(e)=> {setInputValue(e.target.value)}}/>
            <button ><img className="search-icon"src={SearchImg}/></button>

        </form>
    )
}
export default Search;