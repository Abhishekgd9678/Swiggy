import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <div className="Header">
            <div className="Left-part">
                 <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais" />
                <h3><Link to="/">Food Mandi</Link></h3>
            </div>
        
            <div className="Right-part">
            <ul className="Nav-items">
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/contact">Contact</Link></li> 
            <li><Link to="/about">About Us</Link></li> 
            <li><Link to="/cart">Cart</Link></li>  
            </ul>    
            </div>    
        </div>
        </>
    )
}
export default Header;
