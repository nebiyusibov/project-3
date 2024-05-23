import { Link } from "react-router-dom"
import "./MainNavbar.scss"

function MainNavbar() {
  return (
    <header className="main_header">
      <nav className="main_nav"> 
      <div className="image_nav"><img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_dark.png" alt="" /></div>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>Features</li>
          <li>Shop</li>
        </ul>
         <div className="basket_wishlist">
         <li><Link to={"/basket"}><i className="fa-solid fa-cart-shopping"></i></Link></li>
          <li><Link to={"/wishlist"}><i className="fa-solid fa-heart"></i></Link></li>
          <button>BUY NOW</button>
         </div>
      </nav>
    </header>
  )
}

export default MainNavbar
