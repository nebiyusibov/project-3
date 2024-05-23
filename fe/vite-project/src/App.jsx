
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './ROUTERS/router'
import MainProvaiderBasket from './context/MainProvaiderBasket'
import MainProvaiderWishList from './context/MainProvaiderWishlist'

function App() {

  return (
    <>
     <MainProvaiderBasket>
      <MainProvaiderWishList>
        <RouterProvider router={router}></RouterProvider>
      </MainProvaiderWishList>
     </MainProvaiderBasket>
    </>
  )
}

export default App
