import { useContext, useEffect, useState } from "react";
import "./Home.scss"
import { MainContextBasket } from "../../context/MainProvaiderBasket";
import { MainContextWishList } from "../../context/MainProvaiderWishlist";
import { Link } from "react-router-dom";

function Home() {
  const {addBasket}=useContext(MainContextBasket)
  const {isExist,addWishList}=useContext(MainContextWishList)

  const [product,setproduct]=useState([])
  const [search,setsearch]=useState("")

  async function getProduct() {
    const res=await fetch("http://localhost:3000/product")
    const data=await res.json()
    setproduct(data)
  }

  useEffect(()=>{
    getProduct()
  },[])


  return (
    <main>
      <section className="fetch_section">
        <div className="fetch_container">
          <div className="sort_filter_text">
            <input type="text"  placeholder="search" value={search} onChange={(e)=>setsearch(e.target.value)}/>
            <div className="text_div">
              <p className="p_1">ADJUSTABLE STRAPS</p>
              <p className="p_2">Choose the best color for your activity</p>
            </div>
            <div className="button_sort">
              <button>A-z</button>
              <button>Z-a</button>
            </div>
          </div>
          <div className="fetch_card" >
            {product
            .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
            .map((x)=>(
              
              <div key={x._id} className="fetch_card_card">
                <img src={x.image} alt="" />
                <h3>name:{x.name}</h3>
                <h3>price:{x.price}</h3>
                <button onClick={()=>addBasket(x)}>add basket</button>
                <div onClick={()=>addWishList(x)}>{isExist(x) ?( <i className="fa-solid fa-heart"></i> ):( <i className="fa-regular fa-heart"></i>)}</div>
                <div><Link to={`detail/${x._id}`}>Detail</Link></div>
              </div>
            ))}
          </div>
          <div className="button">
            <button>SEE MORE</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
