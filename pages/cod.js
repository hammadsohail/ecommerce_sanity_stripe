import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMinus, AiOutlinePlus, AiOutlineLeft} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useRouter } from "next/router";

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';


const cod = () => {

    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  return (
    <div className="">
      <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
      <div className="">
      <span className="cart-num-items">({totalQuantities} items)</span>

        </div>
        <div className="product-container">
        <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
        {cartItems.length >=1 && cartItems.map((item, index) =>
          (
           <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])}
              className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                <h3>Subtotal:</h3>
               <h3>${totalPrice}</h3>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                 </div>
                 <div className="flex bottom">
                   <div>
                   <p className="quantity-desc">
                            <span className="minus"
                             onClick={() => toggleCartItemQuantity(item._id, 'dec') }
                            >
                             <AiOutlineMinus />
                            </span>
                            <span className="num"
                            onClick="" >{item.quantity}
                            </span>
                            <span className="plus"
                              onClick={() => toggleCartItemQuantity(item._id, 'inc') }
                            >
                              <AiOutlinePlus />
                            </span>
                        </p>
                     </div>
                   <button type="button"
                   className="remove-item"
                   onClick={() => onRemove(item)}>
                    <TiDeleteOutline />
                   </button>
                 </div>
              </div>
            </div>
          ))}
          </div>
      </div>
  )
}

export default cod