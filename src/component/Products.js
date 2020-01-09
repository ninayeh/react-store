import React from 'react'
import ToolBox from './ToolBox'
import Product from './Product'

class Products extends React.Component {
  state = {
    products: [ ]
  }

  componentDidMount() {
    fetch('http://localhost:3003/products')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        products: data
      })
    })
  }

  render () {
    return (
      <div>
        <ToolBox />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {
              this.state.products.map( p => (
                <div className="column is-3" key={p.id}>
                  <Product product={p}/>
                </div>
            )) }
          </div>       
        </div>
      </div>
    )
  }
}

export default Products;