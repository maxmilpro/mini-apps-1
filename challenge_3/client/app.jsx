// const React = require('react');
// import $ from 'jquery';

const Home = function(props) {
  return (
    <button onClick={props.handleSubmit}>Checkout</button>
  )
}

const CreateAccount = function(props) {
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={props.handleUpdate}>
        <div>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={props.name}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={props.email}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              name="password"
              type="text"
              value={props.password}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <input type="submit" value="Next"/>
      </form>
    </div>
  )
}

const ShippingAddress = function(props) {
  return (
    <div>
      <h1>Shipping Address</h1>
      <form onSubmit={props.handleUpdate}>
        <div>
          <label>
            Line 1:
            <input
              name="line1"
              type="text"
              value={props.line1}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Line 2:
            <input
              name="line2"
              type="text"
              value={props.line2}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              name="city"
              type="text"
              value={props.city}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            State:
            <input
              name="state"
              type="text"
              value={props.state}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Zip Code:
            <input
              name="zipCode"
              type="text"
              value={props.zipCode}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              name="phoneNumber"
              type="text"
              value={props.phoneNumber}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <input type="submit" value="Next"/>
      </form>
    </div>
  )
}

const Payment = function(props) {
  return (
    <div>
      <h1>Payment</h1>
      <form onSubmit={props.handleUpdate}>
        <div>
          <label>
            Credit Card #:
            <input
              name="cc"
              type="text"
              value={props.cc}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Exipration Date:
            <input
              name="expiryDate"
              type="text"
              value={props.expiryDate}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            CVV:
            <input
              name="cvv"
              type="text"
              value={props.cvv}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Billing Zip Code:
            <input
              name="billingZipCode"
              type="text"
              value={props.billingZipCode}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <input type="submit" value="Next"/>
      </form>
    </div>
  )
}

const Summary = function({purchase, handleUpdate}) {
  return (
    <div>
      <h1>Summary</h1>
      <div>
        <h2>Account Info</h2>
        <div>Name: {purchase.name}</div>
        <div>Email: {purchase.email}</div>
        <div>Password: {purchase.password}</div>
      </div>
      <div>
        <h2>Shipping Address</h2>
        <div>Line 1: {purchase.line1}</div>
        <div>Line 2: {purchase.line2}</div>
        <div>City: {purchase.city}</div>
        <div>State: {purchase.state}</div>
        <div>Zip Code: {purchase.zipCode}</div>
        <div>Phone Number: {purchase.phoneNumber}</div>
      </div>
      <div>
        <h2>Payment</h2>
        <div>Credit Card #: {purchase.cc}</div>
        <div>Expiration Date: {purchase.expiryDate}</div>
        <div>CVV: {purchase.cvv}</div>
        <div>Billing Zip Code: {purchase.billingZipCode}</div>
      </div>
      <button onClick={handleUpdate}>Purchase</button>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      name: null,
      email: null,
      password: null,
      line1: null,
      line2: null,
      city: null,
      state: null,
      zipCode: null,
      phoneNumber: null,
      cc: null,
      expiryDate: null,
      cvv: null,
      billingZipCode: null,
      complete: false,
      currentPage: 0
    };
    this.initialState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit() {
    $.get('http://localhost:3000/checkout', (id) => {
      console.log(id);
      this.setState(id)
      this.setState({
        currentPage: 1
      })
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    console.log(this.state);
    let data = this.state;
    $.post('http://localhost:3000/checkout', data, () => {
      console.log('Sent updated data to the server');
      console.log('currentPage: ', this.state.currentPage)
      var page = this.state.currentPage;
      page++;
      if (page < 5) {
        this.setState({
          currentPage: page
        })
      } else {
        this.setState(this.initialState)
      }
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.state.currentPage === 0) {
      return <Home handleSubmit={this.handleSubmit}/>
    } else if (this.state.currentPage === 1) {
      return <CreateAccount handleInputChange={this.handleInputChange} handleUpdate={this.handleUpdate}/>
    } else if (this.state.currentPage === 2) {
      return <ShippingAddress handleInputChange={this.handleInputChange} handleUpdate={this.handleUpdate}/>
    } else if (this.state.currentPage === 3) {
      return <Payment handleInputChange={this.handleInputChange} handleUpdate={this.handleUpdate}/>
    } else if (this.state.currentPage === 4)  {
      return <Summary purchase={this.state} handleUpdate={this.handleUpdate}/>
    }
  }
}


ReactDOM.render(<App/>, document.getElementById('App'));