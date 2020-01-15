import React from 'react'
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';

class ToolBox extends React.Component {

  state = {
    searchText: ''
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

  goCart = () => {
    // 判斷目前使用者是否已經登入
    if (!global.auth.isLogin()){
      this.props.history.push('/login')
      toast.info('Plaese Login First');
      return;
    }
    // 會噴錯，因為ToolBox 這個沒有經過 Router，所以不會有 history
    // 所以需要 withRouter 包裝一下，讓他可以用 history
    this.props.history.push('/cart')

  }

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
        {/* <Link to="/cart" className="cart-box"></Link> */}
        <div to="/cart" className="cart-box" onClick={this.goCart}>
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-number">({this.props.cartNum})</span>
        </div>
      </div>
    )
  }
}

export default withRouter(ToolBox);