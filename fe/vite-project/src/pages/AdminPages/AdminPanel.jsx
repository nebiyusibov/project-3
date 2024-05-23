import { useEffect, useState } from "react"
import "../../layout/AdminLayout/AdminNavbar.scss"

function AdminPanel() {
  const [product,setproduct]=useState([])

  async function getProduct() {
    const res=await fetch("http://localhost:3000/product")
    const data=await res.json()
    setproduct(data)
  }

  useEffect(()=>{
    getProduct()
  },[])

  async function deleteProduct(id) {
    const res=await fetch("http://localhost:3000/product/"+id,{ method:"delete"})
    const data= res.json()
    console.log(data);
    getProduct()
  }
  return (
    <div className="adminpanel_table">
      <table border={"1px"}>
           <thead>
            <tr>
              <th>image</th>
              <th>name</th>
              <th>price</th>
              <th>delete</th>
            </tr>
           </thead>
           {product.map((x)=>(
            <tbody key={x._id}>
                 <tr>
                  <td><img src={x.image} alt=""  style={{width:"75px" , height:"75px"}}/></td>
                  <td>{x.name}</td>
                  <td>{x.price}</td>
                  <td><button onClick={()=>deleteProduct(x._id)}>delete</button></td>
                 </tr>
            </tbody>
           ))}
      </table>
    </div>
  )
}

export default AdminPanel
