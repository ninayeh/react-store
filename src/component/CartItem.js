import React, { useState, useMemo } from 'react';
import { formatPrice } from 'commons/helper';
import axios from 'commons/axios'
// import { toast } from 'react-toastify';

const CartItem = (props) => {
  const [mount, setMount] = useState(props.cart.mount)
  const {id, name, image, price} = props.cart || {}

  //傳遞一個「建立」function 及依賴 array。
  //useMemo 只會在依賴改變時才重新計算 memoized 的值。
  //這個最佳化可以避免在每次 render 都進行昂貴的計算。
  // const sumPrice = formatPrice(parseInt(price) * mount)
  const sumPrice = useMemo(() => {
    return formatPrice(parseInt(price) * mount)
  }, [mount, price])
  // 只有當 [mount, price] 這兩個值發生變化時，才重新計算

  const handleChange = e => {
    const _mount = parseInt(e.target.value)
    setMount(_mount)
    const newCart = {
      ...props.cart, // 拿到目前 props 裡面的 cart
      mount: _mount

    }
    axios.put(`carts/${id}`, newCart).then(res => {
      // 父組件裡面的函示
      props.updateCart(newCart);
    })
    // console.log(newCart)
  };

  const deleteCart = () => {
    axios.delete(`carts/${id}`).then(res => {
      // 父組件裡面的函示
      props.deleteCart(props.cart)
    })
  }

  return (
    <div className="columns is-vcentered">
      <div className="column is-narrow">
        <span className="close" onClick={deleteCart}>X</span>
      </div>
      <div className="column is-narrow">
        <img src={image} alt={name} width="100"/>
      </div>
      <div className="column cart-name is-narrow">
        {name}
      </div>
      <div className="column">
        <span className="price">{formatPrice(price)}</span>
      </div>
      <div className="column">
        <input 
          type="number" 
          min={1}
          className="input num-input" 
          value={mount}
          onChange={handleChange}
        />
      </div>
      <div className="column">
        <span className="sum-price">{sumPrice}</span>
      </div>
    </div>
  )
}

export default CartItem;