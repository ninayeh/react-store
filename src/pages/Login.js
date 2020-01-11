import React from 'react'


class Login extends React.Component {

  state = {
    email: '', 
    password: ''
  }

  handleSubmit = event  => {
    // 1. 阻止預設事件行為
    event.preventDefault();
    // 2. 取得表單的資料
    // console.log(this.state)
    // 3. 登入的邏輯

    // 4. 跳轉頁面
    //this.props.history.push('/');
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      
    })
  }

  render() {
    return (
    <div className="login-wrapper">
      <form className="box login-box" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="lable">Email</label>
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Email" 
              name="email"
              onChange= {this.handleChange}
              value={this.state.email}
            />
          </div>
        </div>
        <div className="field">
          <label className="lable">Password</label>
          <div className="control">
            <input 
              className="input" 
              type="password" 
              placeholder="Password" 
              name="password"
              onChange= {this.handleChange}
              value={this.state.password}
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-fullwidth is-primary">Login</button>
        </div>
      </form>
    </div>
    
    )
  }
}

export default Login;