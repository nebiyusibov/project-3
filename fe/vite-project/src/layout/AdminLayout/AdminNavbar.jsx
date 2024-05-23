import { Link } from "react-router-dom"
import "./AdminNavbar.scss"

function AdminNavbar() {
  return (
    <header>
      <nav className="admin_navbar"> 
        <ul>
          <li><Link to={"/adminpanel"}>admin page</Link></li>
          <li><Link to={"/adminpanel/add"}>add</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default AdminNavbar
