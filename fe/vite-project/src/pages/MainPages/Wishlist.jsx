import { useContext } from "react"
import { MainContextWishList } from "../../context/MainProvaiderWishlist"

function Wishlist() {
  const {wishlist}=useContext(MainContextWishList)
  return (
    <div>
       <div>
      <div>
       {wishlist.map((x)=>(
        <div key={x._id}>
            <img src={x.image} alt="" width={"200px"}/>
            <h3>name:{x.name}</h3>
            <h3>price:{x.price}</h3>
        </div>
       ))}
      </div>
    </div>
    </div>
  )
}

export default Wishlist
