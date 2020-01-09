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
    sourceProduct: []
  }

  componentDidMount() {
    axios.get('/products').then(response => {
      // console.log(response)
      this.setState({
        products: response.data,
        sourceProduct: response.data
      })
    })
  }

  search = text => {
    // console.log(text);
    // 1. Get new array 複製一個新的陣列
    let _products = [...this.state.sourceProduct]
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
        console.log( 'Product Data:', data)
      }
    })

  }

  render () {
    return (
      <div>
        <ToolBox something="Hello" search={this.search}/>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
              { this.state.products.map( p => (
                  <CSSTransition classNames="product-fade" timeout={300} key={p.id}>
                    <div className="column is-3" key={p.id}>
                      <Product product={p}/>
                    </div>
                  </CSSTransition>
              )) }
            </TransitionGroup>
          </div>       
          <button className="button is-primary add-btn" onClick={this.toAdd}>add</button>
        </div>
      </div>
    )
  }
}

export default Products;