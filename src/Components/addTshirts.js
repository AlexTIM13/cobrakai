import React, {Component} from "react";
import axios from "axios"

class AddTshirts extends Component {
   constructor () {
     super ();
      this.state = {
        sku: "",
        category: "",
        type: "",
        tShirt: "",
        price: "",
        quantity: "",
        image: ""
    }
  }

handleChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

handleClick = () => {
  const {sku, category, type, tShirt, price, quantity, image} = this.state;

  axios.post("/api/tShirts", {sku, category, type, tShirt, price, quantity, image})
    .then((response) => 
      {console.log(response)
      this.props.updatetShirts(response.data)})
}

 render () {
   return (
     <div className="container">

       <label htmlFor="">SKU<input className="sku" name= "sku" onChange={this.handleChange} placeholder="SKU" /></label>

      <label htmlFor="">Category<input className="category" name= "category" onChange={this.handleChange} placeholder="Category" /></label>

      <label htmlFor="">Type<input className="type" name= "type" onChange={this.handleChange} placeholder="Type" /></label>
      
      <label htmlFor="">T-Shirt<input className="tShirt" name= "tShirt" onChange={this.handleChange} placeholder="T-Shirt" /></label>

      <label htmlFor="">Price<input className="price" name= "price" onChange={this.handleChange} placeholder="Price" /></label>
      
      <label htmlFor="">Qty<input className="quantity" name= "quantity" onChange={this.handleChange} placeholder="Quantity" /></label>
      
      <label htmlFor="">Image<input className="image" name= "image" onChange={this.handleChange} placeholder="Image" /></label>

     <label htmlFor=""><button className="btn-addsku" onClick={this.handleClick}>Add T-Shirt</button></label> 
      
     
     </div>

      )
    }     
  }

export default AddTshirts;