import React from 'react'
import ToolBox from './ToolBox'
import Product from './Product'

class Products extends React.Component {
  render () {
    return (
      <div>
        <ToolBox />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>
            <div className="column is-3">
              <Product />
            </div>

          </div>
          
          
        </div>
      </div>
    )
  }
}

export default Products;