import React from 'react';

function Card({ product, addToCart,CartItems }) {
    return (
        <div className="col-lg-4 border mt-2 p-2 text-center">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-fluid" src={product.image} alt={product.name} style={{width:"150px",height:"100px"}}/>
                </div>
                <div className="col-lg-12">
                    <h3>{product.name}</h3>
                    <h6>Price Rs.{product.price}</h6>
                    <button disabled={CartItems.some(obj=>obj.id===product.id)} onClick={()=>{addToCart(product)}} className="btn btn-sm btn-primary">
                       {
                        CartItems.some(obj=>obj.id===product.id) ? 'Added to Cart' :'Add to Cart'
                       }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
