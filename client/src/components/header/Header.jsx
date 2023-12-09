import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);
    
    return (
        <header>
            <h1><Link className="home" to="/">Headhunters</Link></h1>
            {isAuthenticated && (
                <h4> <span>Welcome {username.split('@')[0]}</span></h4>
                
                )}
                
            <nav>
                <Link to="/games">Villants list</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/games/captured">Captured</Link>
                        <Link to="/games/create">Add new villant</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}

            </nav>
        </header>
    );
}
