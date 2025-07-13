import {Link} from 'react-router-dom';
import About from './About' ;

function Navbar () {
    return (
        <>
        <ul>
        <li><Link to="./Home">Home</Link></li>
        <li><Link to="/about"> About</Link></li>
        </ul>
        </>
    )
}

export default Navbar  ;