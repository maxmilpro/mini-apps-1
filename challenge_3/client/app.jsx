// const React = require('react');

const Home = function(props) {
  return (
    <div>Checkout</div>
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
      recordId: null,
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
    }
  }
  render() {
    if (this.state.recordId === null) {
      return <Home/>
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