import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Card from "./card";
import Cart from "./cart";
import Iphone from "./Iphone.jpg"
import Iwatch from "./Iwatch.jpg"
import Ipad from "./Ipad.jpg"
import Ipen from "./Ipen.jpg"
import MacBookPro from "./MacBookPro.jpg"
import IphoneSE from "./IphoneSE.jpeg"
function App(){
  const [products,setProducts]=useState([ {
    id:1,
    name:'Iphone',
    price:100000,
    image:Iphone,
  },
  {
    id:2,
    name:'Iwatch',
    price:3000,
    image:Iwatch,
  },
  {
    id:3,
    name:'Ipad',
    price:45000,
    image:Ipad,
  },
  {
    id:4,
    name:'Ipen',
    price:29000,
    image:Ipen,
  },
  {
    id:5,
    name:'MacBook pro',
    price:560000,
    image:MacBookPro,
  },
  {
    id:6,
    name:'IphoneSE',
    price:65000,
    image:IphoneSE,
  }])
  

  const[CartItems,setCartItems]=useState([]);
const addToCart = (product) =>{
   setCartItems([...CartItems,product])
  }
let removeFromCart =(product)=>{
 const indexVal = CartItems.findIndex(obj =>obj.id ===product.id)
 CartItems.splice(indexVal,1);
 setCartItems([...CartItems]);
}
  return(<>
    <h1 class="text-center bg-dark text-white"style={{height:"150px",paddingTop:"40px"}}>Shop Apple Products at Low Price</h1>
   <div className="container">
     <div className="row">
       <div className="col-lg-8">
        <div className="row">
      {
         products.map((product,index)=>{
          return <Card key={index} product={product} addToCart={addToCart} CartItems={CartItems} />
         })
      }
       </div>
       </div>
       <div className="col-lg-4">
        <h3>Cart</h3>
       <Cart CartItems={CartItems} removeFromCart={removeFromCart}></Cart>
</div>
      
     </div>
     </div>
  </>
   
  )
}

export default App;
