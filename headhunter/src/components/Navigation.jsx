import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Navigation  = () => {
return (
    <ul className="navbar">
      <li className="logo">
        <a href="#"><img src="company_logo.png" alt="Company Logo" /></a>
      </li>
      <li><Link to="/about">About Us</a></li>
      <li><Link to="/login">Login</a></li>
      <li><Link to="/register">Register</a></li>
      <li><Link to="/catalog">Catalog</a></li>
    </ul>
)
};
export default Navigation ;