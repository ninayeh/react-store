import React from 'react';
import axios from 'commons/axios'
import { toast } from 'react-toastify';

class AddInventory extends React.Component {
  state = {
    name: '',
    price: 0,
    tags: '',
    image: '',
    status: 'available'
  };
  
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })

  }

  submit = e => {
    e.preventDefault();
    // const product = this.state
    const product = {...this.state}
    // console.log(product)
    axios.post('products', product).then( res => {
      // console.log(res.data);
      this.props.close(res.data)
      toast.success('Add success');
    })
  }

  render() {
    return(
      <div className="inventory">
        <p className="title has-text-centered">Inventory</p>
        <form onSubmit={this.submit}>
          <div className="field">
            <div className="control">
              <label className="label">Name</label>
              <textarea 
                className="textarea" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} />
            </div>
          </div>      
          <div className="field">
            <div className="control">
              <label className="label">Price</label>
              <input 
                className="input" 
                type="number" 
                name="price"
                value={this.state.price} 
                onChange={this.handleChange} />
            </div>
          </div>      

          <div className="field">
            <div className="control">
              <label className="label">Tags</label>
              <input 
                className="input" 
                type="text" 
                name="tags"
                value={this.state.tags} 
                onChange={this.handleChange}/>
            </div>
          </div>      

          <div className="field">
            <div className="control">
              <label className="label">Image</label>
              <input 
                className="input" 
                type="text" 
                name="image"
                value={this.state.image} 
                onChange={this.handleChange}
                />
            </div>
          </div>  

          <div className="field">
            <div className="control">
              <label className="label">Status</label> 
              <div className="select is-fullwidth">
                <select 
                  name="status" 
                  onChange={this.handleChange} 
                  value={this.state.status} >       
                  <option>available</option> 
                  <option>unavailable</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">    
              <button 
                className="button" 
                type="button" 
                onClick={() => this.props.close()}
              >
                Cancel
              </button>
            </div>

          </div>
        </form>       
      </div>
    )
  }

}

export default AddInventory;