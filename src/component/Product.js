import React from 'react'
import Panel from 'component/Panel'
import {formatPrice} from 'commons/helper'
import EditInventory from './EditInventory'
import axios from 'commons/axios'
import { toast } from 'react-toastify';

class Product extends React.Component {

  toEdit = () => {
    Panel.open({
      component: EditInventory, 
      callback: data => {
        console.log(data)
        if (data){
          this.props.update(data)
        }       
      }, 
      action: "say hi", 
      props: {
        product: this.props.product,
        deleteProduct: this.props.delete 
      }
      // props: this.props.product
    });
  };

  addCart = async () => {
    try {
      const {id, name, image, price } = this.props.product;
      // 查詢有沒有重複商品，異步函數
      // GET /cart?id=1&id=2
      const response = await axios.get(`/carts?productId=${id}`);
      const carts = response.data;
      console.log(carts);
      if (carts && carts.length > 0){
        const cart = carts[0]
        cart.mount += 1
        await axios.put(`/carts/${cart.id}`, cart)
      } else {
        const cart = {
          productId: id,
          name, 
          image,
          price,
          mount: 1
        };
  
        // 沒有重複商品的話就新增
        // axios.post('/carts', cart).then( res => { 
        //   toast.success('Add to cart!') 
        // });
        // 使用異步函數
        await axios.post('/carts', cart)
  
      }    
      toast.success('Add to cart!')  
      this.props.updateCartNum(); //實際呼叫
    } catch (error) {
      toast.error('Add cart failed')  
    }
    
  };

  
  render () {
    const {name, image, tags, price, status} = this.props.product;
    const _pClass = {
      available: 'product',
      unavailable: 'product out-stock'
    };
    return (
      <div className={_pClass[status]}>
        <div className="p-content">
          <div className="p-head has-text-right" onClick={this.toEdit}>
            <span className="icon edit-btn">
              <i className="fas fa-sliders-h"></i>
            </span>
          </div>
          <div className="img-wrapper">
            <div className="out-stock-text">Out Of Stock</div>
            <figure className="image is-4by3">
              <img src={image} alt={name}/>
            </figure>   
          </div>
          <p className="p-tags">{tags}</p>
          <p className="p-name">{name}</p>
        </div>
        <div className="p-footer">
          <p className="price">{formatPrice(price)}</p>
          <button className="add-cart" disabled={status === 'unavailable'} onClick={this.addCart}> 
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation "></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Product;