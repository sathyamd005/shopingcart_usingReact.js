import React from 'react'

function Cart({ CartItems,removeFromCart }) {
  return (
    <>
     {
            CartItems.length === 0 ? <div>No items in Cart</div> :
            <>
            <ol className="list-group list-group-numbered">
                {
                 CartItems.map((items,index) => {
                 return  <li key={index}className="list-group-item d-flex justify-content-between align-items-start">
                 <div className="ms-2 me-auto">
                   <div className="fw-bold">{items.name}</div>
                   Rs.{items.price}
                 </div>
                 <button onClick={()=>{
                   removeFromCart(items)
                 }} className="badge text-bg-primary rounded-pill">x</button>
               </li>
                 })
                }
     </ol>
     <h3>Total :Rs.{
         CartItems.reduce((prev,curr)=>{
           return prev=prev+curr.price;
         },0)
       }</h3>
            </>
     }
    </>
  )
}

export default Cart;