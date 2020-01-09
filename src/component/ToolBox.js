import React from 'react'

class ToolBox extends React.Component {

  state = {
    searchText: "" 
  }

  handlechange = e => {
    const value = e.target.value
    this.setState({
      searchText: value
    });
    this.props.search(value)
  };

  clearSearchText = () => {
    this.setState({
      searchText: ''
    });
    this.props.search('')
  };

  render () {
    return (
      <div className="tool-box">
        <div className="logo-text">{this.props.something}</div>
        <div className="search-box">
          <div className="field has-addons">
            <div className="contorl">
              <input 
                type="text" 
                className="input search-input" 
                placeholder="search"
                value={this.state.searchText}
                onChange={this.handlechange}/>
            </div>
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>X</button>
            </div>
          </div>
        </div>
        <div className="cart-box">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-number">(0)</span>
        </div>
      </div>
    )
  }
}

export default ToolBox;