import { createContext, useState } from "react"

export const MainContextWishList=createContext()

function MainProvaiderWishList({children}) {
    const [wishlist,setwishlist]=useState([])
   function addWishList(item) {
    const index=wishlist.findIndex((x)=>x._id === item._id)
    if (index !== -1) {
        return setwishlist(wishlist.filter((x)=>x._id !== item._id))
    }
    else{
        setwishlist([...wishlist,item])
    }
   }
   function isExist(item) {
    return wishlist.find((x)=>x._id === item._id)
   }

  return (
    <div>
      <MainContextWishList.Provider value={{addWishList,wishlist,isExist}}>
       {children}
      </MainContextWishList.Provider>
    </div>
  )
}

export default MainProvaiderWishList
