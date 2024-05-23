import { useContext } from "react"
import { MainContextBasket } from "../../context/MainProvaiderBasket"

function Basket() {
  const {addBasket,decBasket,removeBasket,basket}=useContext(MainContextBasket)
  return (
    <div>
      <div>
       {basket.map((x)=>(
        <div key={x._id}>
            <img src={x.image} alt="" width={"200px"}/>
            <h3>name:{x.name}</h3>
            <h3>price:{x.price}</h3>
            <button onClick={()=>addBasket(x)}>increase</button>
            {x.count}
            <button onClick={()=>decBasket(x)}>decrease</button>
            <button onClick={()=>removeBasket(x)}>delete</button>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Basket
