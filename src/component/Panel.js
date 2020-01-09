/**
 1. 一次載入，随需调用
 2. 装载组件
    (1)、子组件作為参数傳遞並被渲染
    (2)、子组件可以關閉弹出層
    (3)、子组件與調用者可以對話
 */

import React from 'react'
import { render } from 'react-dom'

class Panel extends React.Component {
  state = {
    active: false, 
    content: '', 
    callback: () => {}
  }

  open = (options) => {
    // {component} 是一個構造函數
    const { component, callback } = options
    const _key = new Date().getTime();
    // (1)創造一個可渲染的元件實體 _component (2)、子组件可以關閉弹出層
    const _component = React.createElement(component,{
      close: this.close, 
      key: _key  
    })
    
    this.setState({
      active: true,
      content: _component,
      callback: callback
    })
  }

  close = (data) => {
    this.setState({
      active: false
    });
    this.state.callback(data);
  };
  
  render() {
    const _class = {
      true: "panel-wrapper  active", 
      false: "panel-wrapper"
    }
    return (
      <div className={_class[this.state.active]}>
        <div className="over-layer"  onClick={this.close}></div>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={this.close}>x</span>        
              {/* {(1)、子组件作為参数傳遞並被渲染} */}
              {this.state.content}

          </div>     
        </div>
      </div>
    )
  }
}

const _div = document.createElement('div')
document.body.appendChild(_div)

const _panel = render(<Panel />, _div)
console.log(_panel)
export default _panel;