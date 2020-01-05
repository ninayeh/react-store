import React from 'react'


class Login extends React.Component {

  handleSubmit = event  => {
    // 1. 阻止預設事件行為
    event.preventDefault();
    // 2. 取得表單的資料

    // 3. 登入的邏輯

    // 4. 跳轉頁面
    this.props.history.push('/');
  }

  render() {
    return (
    <div className="login-wrapper">
      <form className="box login-box" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="lable">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>
        <div className="field">
          <label className="lable">Password</label>
          <div className="control">
            <input className="input" type="text" placeholder="Password" />
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