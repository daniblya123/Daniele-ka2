import {Link, NavLink} from "react-router-dom"
import "./NavbarLayout.css"

function Navbar(){
    let buscuitNum = 1000
    return(<>
    <nav className="navbar">
        <Link to="/" className="title-navbar">Home</Link>
        <ul>
            <li>
                <NavLink to="/BiscuitClicker">BiscuitClicker</NavLink>
            </li>
            <li>
                <NavLink to="TemperatureChecker">TemperatureChecker</NavLink>
            </li>
            <a className="no-hover" >Biscuit Number: {buscuitNum}</a>
        </ul>
    </nav>


    </>)
}
export default Navbar;