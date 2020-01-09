import React from 'react'
import ToolBox from './ToolBox'
import Product from './Product'
import axios from 'commons/axios'

class Products extends React.Component {
  state = {
    products: [ ]
  }

  componentDidMount() {
    axios.get('/products').then(response => {
      console.log(response)
      this.setState({
        products: response.data
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