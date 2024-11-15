import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>        

        
      </div>
    </nav>
  );
}
 
export default Navbar;