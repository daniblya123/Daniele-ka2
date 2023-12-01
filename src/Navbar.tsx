import {Link, NavLink} from "react-router-dom"
function Navbar(){
    let buscuitNum = 100
    return(<>
    <nav className="navbar">
        <Link to="/">Home</Link>
        <ul>
            <li>
                <NavLink to="/BiscuitClicker">BiscuitClicker</NavLink>
            </li>
            <li>
                <NavLink to="TemperatureChecker">TemperatureChecker</NavLink>
            </li>
            <a>Biscuit Number: {buscuitNum}</a>
        </ul>
    </nav>


    </>)
}
export default Navbar;