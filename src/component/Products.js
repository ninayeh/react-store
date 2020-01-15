import React from 'react'
import ToolBox from './ToolBox'
import Product from './Product'
import axios from 'commons/axios'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Panel from 'component/Panel'
import AddInventory from 'component/AddInventory'

class Products extends React.Component {
  state = {
    products: [ ], 
    sourceProducts: [],
    cartNum: 0
  }

  // cartNum 不放在 ToolBox 是因為 ToolBox 與 Product 
  // 是平行的兄弟層級，需要透過共同的 Products 父層級來做
  // 參數的傳遞（搜尋「狀態提升」）

  componentDidMount() {
    axios.get('/products').then(response => {
      // console.log(response)
      this.setState({
        products: response.data,
        sourceProducts: response.data
      });
    });
    this.updateCartNum();
  }

  search = text => {
    // console.log(text);
    // 1. Get new array 複製一個新的陣列
    let _products = [...this.state.sourceProducts]
    // 2. Filter new array
    // p.name: Abcd 
    // text: ab ===> ['Ab']
    // text: '' ===> ["", "", "", "", ""]
    _products = _products.filter(p => {
      const matchArray = p.name.match(new RegExp(text, 'gi'))
      // return matchArray !== null 
      return !!matchArray
    })
    // 3. Set state
    this.setState({
      products: _products
      
    }) 
  }

  toAdd = () => {
    Panel.open({
      component: AddInventory,
      callback: data => {
        console.log(data)
        if (data) {
          this.add(data);
        }
      }
    });
  };
  // 刷新頁面用
  add = product => {
    const _products = [...this.state.products]; 
    _products.push(product);
    const _sProducts = [...this.state.sourceProducts]; 
    _sProducts.push(product);
    this.setState({
      products: _products,
      sourceProducts: _sProducts
        
    });
  };
  // 刷新頁面用
  update =  product => {
    const _products = [...this.state.products]; 
    const _index = _products.findIndex(p => p.id === product.id)
    _products.splice(_index, 1, product);
    const _sProducts = [...this.state.sourceProducts]; 
    const _sindex = _products.findIndex(p => p.id === product.id)
    _sProducts.splice(_sindex, 1, product);  
    
    this.setState({
      products: _products,
      sourceProducts: _sProducts     
    });
  };
  // 刷新頁面用
  delete = id => {
    const _products = this.state.products.filter(p => p.id !== id)
    const _sProducts = this.state.sourceProducts.filter(p => p.id !== id)
    this.setState({
      products: _products,
      sourceProducts: _sProducts     
    });
  }

  // 更新購物車數量
  updateCartNum = async () => {
    const cartNum = await this.initCartNum()
    this.setState({
      cartNum: cartNum
    })
  }
  // 計算所有在購物車裡的商品數量，使用異步函數
  // 在這邊對後端做請求
  initCartNum = async () => {
    const user = global.auth.getUser() || {}
    //const res = await axios.get('/carts')
    const res = await axios.get(`/carts`, { 
      params: {
        userId: user.email
      }
    });
    
    const carts  = res.data || []
    const cartNum = carts
      .map(cart => cart.mount) // ex.[2, 1, 1]
      .reduce((a, value) => a + value, 0 ) //a:累加器 value: 當前的值
    return cartNum
  }



  render () {
    return (
      <div>
        <ToolBox 
          something="Hello" 
          search={this.search} 
          cartNum={this.state.cartNum}/>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
              { this.state.products.map( p => (
                  <CSSTransition classNames="product-fade" timeout={300} key={p.id}>
                    <div className="column is-3" key={p.id}>
                      <Product 
                        product={p} 
                        update={this.update}
                        delete={this.delete} 
                        updateCartNum ={this.updateCartNum}/>
                    </div>
                  </CSSTransition>
              )) }
            </TransitionGroup>
          </div> 
          {(global.auth.getUser() || {}).type === 1 && (     
            <button className="button is-primary add-btn" onClick={this.toAdd}>add</button>
          )}
        </div>
      </div>
    )
  }
}

export default Products;