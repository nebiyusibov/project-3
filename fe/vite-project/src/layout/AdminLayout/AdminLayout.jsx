import { Outlet } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import AdminFooter from "./AdminFooter"

function AdminLayout() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Outlet></Outlet>
      <AdminFooter></AdminFooter>
    </div>
  )
}

export default AdminLayout
