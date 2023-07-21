import './style.css';
const Navigation = ({handleSearch}) =>{
    return (
        <ul className="ul-nav">
            <li>
                <button onClick={()=> {handleSearch('mountains')}}>Mountain</button>
            </li>
            <li>
                <button onClick={()=> {handleSearch('beaches')}}>Beaches</button>
            </li>
            <li>
                <button onClick={()=> {handleSearch('birds')}}>Birds</button>
            </li>
            <li>
                <button onClick={()=> {handleSearch('food')}}>Food</button>
            </li>

        </ul>

    )
}

export default Navigation;