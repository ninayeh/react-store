import React from 'react'
import ToolBox from './ToolBox'
import Product from './Product'

class Products extends React.Component {
  render () {
    return (
      <div>
        <ToolBox />
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    )
  }
}

export default Products;