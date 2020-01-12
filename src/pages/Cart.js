import React, {useState, useEffect} from 'react'
import Layout from 'Layout';
import CartItem from 'component/CartItem'
import axios from 'commons/axios';
import { formatPrice } from 'commons/helper';

const Cart = () => {
  // 若要拿到購物車裡的內容，原本做法是將此函式改成 class 函式
  // 但是也可以用 Hoo，就可以在不使用 class 的情況下，使用 state 或其他 react 特性
  // 這邊需要導入 {useState, useEffect} 兩個函數
  const [carts, setCarts] = useState([]) //返回一個陣列（數組）
  
  // 類似於 componentDidAMount 那樣的生命週期函數
  useEffect(() => {
    axios.get('/carts').then(res => setCarts(res.data))
  })

  const totalPrice = () => {
    const totalPrice = carts.map(cart => cart.mount * parseInt(cart.price))
    .reduce((a, value) => a + value, 0)
    return formatPrice(totalPrice)
  }

  return(
    <Layout>
      <div className="cart-page">
        <div className="cart-title">Shopping Cart</div>
        <div className="cart-list">
          {
            carts.map(cart => (<CartItem key={cart.id} cart={cart} />))
          }
          
        </div> 
        <div className="cart-total">
          Total:
          <span className="total-price"> {totalPrice()} </span>
        </div>
      </div>  
    </Layout>

  )
}

export default Cart;