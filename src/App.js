import React, {Component} from "react";
import axios from "axios";
import AddTshirts from "./Components/addTshirts";
import './App.css';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      tShirts: [],
      skuNumber:"",
    }
  }

componentDidMount () {
  axios
    .get("/api/tShirts")
    .then((response) => {
      console.log(response.data)
      this.setState ({tShirts: response.data})
    })
}

updatetShirts = (tShirts) => 
{this.setState({tShirts})}

updateSkuState = (e) => 
{this.setState({skuNumber: e.target.value})}

updateSkuRequest = (id) => {
  axios.put(`/api/tShirts/${id}/${this.state.skuNumber}`)
  .then((response) => {
      console.log(response.data)    
      this.setState ({tShirts: response.data})
  })
}

handleDelete = (id) => {
  axios.delete(`/api/tShirts?deleteId=${id}`)
  .then((response) => {
      console.log(response.data)    
      this.setState ({tShirts: response.data})
  })
}

render () {
  return (
    <body>
      <header className="header">
        <div className="header1">
          <h1 className="brand">API T-Shirt's Store</h1>
          <h2 className="cities">London-Tokyo-Rio-LA-Sidney</h2>
          <p>Including our classic collection of "Cobra-Kai" and "Miyagi Dojo" bright designs and classic organic cotton pieces, API men's short sleeve and long sleeve t-shirts are ideal for standout summer clothing or winter layering </p>
        </div>
        
        <div className="header2">
          <nav className="container1">
            <ul className="menu">
              <li>Home</li>
              <li>Store</li>
              <li className="selector">Inventory</li>
              <li>Sign In</li>      
            </ul>
          </nav>
        </div>
      </header>
      
      <section className="registration">
        <h1 className="inventory">T-Shirt Inventory</h1>
        <h2 className="skureg">SKU registration</h2>
        <div className = "input" >
          <AddTshirts updatetShirts = {this.updatetShirts} />
        </div>  
      </section>
        
      <section>
          <h2 className= "skuAvailable">SKU available</h2>
          {this.state.tShirts.map((tshirt) => {
            return (
              <div className="container2">

                <div className="subcontainer2">

                  <div className = "image1" >
                    <img src={tshirt.image} alt="tshirt_image" />
                  </div>

                  <div>  
                    <h3>Id: {tshirt.id}</h3>

                    <div className="subcontainer3">
                      <h3>SKU: {tshirt.sku}</h3>
                      <input className="sku1" onChange={this.updateSkuState} />
                      <button className="btn-update" onClick = {() => this.updateSkuRequest(tshirt.id)}>change SKU</button>
                    </div>
                    
                    <div className="subcontainer3">
                      <h3>Category: {tshirt.category}</h3>
                      <input className="sku1" onChange={this.updateSkuState} />
                      <button className="btn-update" onClick = {() => this.updateSkuRequest(tshirt.id)}>change Category</button>
                    </div>

                    <div className="subcontainer3">
                      <h3>Type: {tshirt.type}</h3>
                      <input className="sku1" onChange={this.updateSkuState} />
                      <button className="btn-update" onClick = {() => this.updateSkuRequest(tshirt.id)}>change Type</button>
                    </div>

                    <div className="subcontainer3">
                      <h3>TShirt: {tshirt.tShirt}</h3> 
                      <input className="sku1" onChange={this.updateSkuState} />
                      <button className="btn-update" onClick = {() => this.updateSkuRequest(tshirt.id)}>change tShirt</button>
                    </div>


                    <div className="subcontainer3">
                      <h3>Price: {tshirt.price}</h3>
                      <input className="sku1" onChange={this.updateSkuState} />
                      <button className="btn-update" onClick = {() => this.updateSkuRequest(tshirt.id)}>change Price</button>
                    </div>

                    <div className="subcontainer3">
                      <h3>Quantity: {tshirt.quantity}</h3>
                      <input className="sku1" onChange={this.updateSkuState} />
                      <button className="btn-update"onClick = {() => this.updateSkuRequest(tshirt.id)}>change Quantity</button> 
                    </div>


                    <button className="btn-update" onClick = {() => this.handleDelete(tshirt.id)}>Delete me</button>
                  </div>
                </div> 
              </div>
            )
          })}
      </section>          
    </body>     
    )
  }
}


export default App;