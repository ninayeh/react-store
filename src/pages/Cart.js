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
  // 如果不傳遞第二個參數的話，會發現這個函式一直重複被執行
  useEffect(() => {
    console.log("===useEffect===")
    axios.get('/carts').then(res => setCarts(res.data)); 
  }, []);

  const totalPrice = () => {
    console.log("===totalPrice===")
    const totalPrice = carts.map(cart => cart.mount * parseInt(cart.price))
    .reduce((a, value) => a + value, 0)
    return formatPrice(totalPrice)
  }

  // 更新 carts 陣列，為了讓他呼叫 totalPrice 重新計算金額
  const updateCart = (cart) => {
    const newCarts = [...carts];
    const _index = newCarts.findIndex( c => c.id === cart.id);
    newCarts.splice(_index, 1, cart)
    setCarts(newCarts);
  };

  const deleteCart= (cart) => {
    // 把收到的 cart 從 carts 陣列裡刪掉
    // 如果 carts 陣列裡面的 id 不等於傳遞過來的 id，就保留
    // 如此得到的新陣列 _carts 就會過濾掉不需要的 id
    const _carts = carts.filter(c => c.id !== cart.id)
    setCarts(_carts)
  }

  return(
    <Layout>
      <div className="cart-page">
        <div className="cart-title">Shopping Cart</div>
        <div className="cart-list">
          {
            carts.map(cart => (
              <CartItem 
                key={cart.id} 
                cart={cart} 
                updateCart={updateCart}
                deleteCart={deleteCart}
              />))
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