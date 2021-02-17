// const React = require('react');
// import $ from 'jquery';

const Home = function(props) {
  return (
    <button onClick={props.handleSubmit}>Checkout</button>
  )
}

const CreateAccount = function(props) {
  return (
    <div>Create Account</div>
  )
}

const ShippingAddress = function(props) {
  return (
    <div>Shipping Address</div>
  )
}

const Payment = function(props) {
  return (
    <div>Payment</div>
  )
}

const Summary = function(props) {
  return (
    <div>Summary</div>
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
      address: {
        line1: null,
        line2: null,
        city: null,
        state: null,
        zipCode: null,
        phoneNumber: null
      },
      billing: {
        cc: null,
        expiryDate: null,
        cvv: null,
        zipCode: null
      },
      complete: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    $.post('http://localhost:3000/checkout', (id) => {
      console.log(id);
      this.setState(id)
    })
  }
  render() {
    if (this.state._id === null) {
      return <Home handleSubmit={this.handleSubmit}/>
    } else if (this.state.name === null) {
      return <CreateAccount/>
    } else if (this.state.address.line1 === null) {
      return <ShippingAddress/>
    } else if (this.state.billing.cc === null) {
      return <Payment/>
    } else {
      return <Summary/>
    }
  }
}


ReactDOM.render(<App/>, document.getElementById('App'));