import React from 'react';

class AddInventory extends React.Component {
  render() {
    return(
      <div className="inventory">
        <p className="title has-text-centered">Inventory</p>
        <br />
        <div className="control">
          <input type="text" className="input"/>
          {/* 子组件可以關閉弹出層 */}

        </div>
        <div className="control">
          <button 
              className="button" 
              onClick={()=> {
                this.props.close('Add Some Data')}}
            >
              Cancel
          </button>
        </div>
        
      </div>
    )
  }

}

export default AddInventory;