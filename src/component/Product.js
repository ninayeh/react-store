import React from 'react'

class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <div className="p-content">
          <div className="img-wrapper">
            <figure className="image is-4by3">
              <img src="images/2.jpg" alt=""/>
            </figure> 
            <p className="p-tags">25 colors</p>
            <p className="p-name">Nike PG3</p>
          </div>
        </div>
        <div className="p-footer">
          <p className="price">38</p>
          <button className="add-cart">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Product;