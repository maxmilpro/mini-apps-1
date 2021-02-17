// const React = require('react');
// import $ from 'jquery';

const Home = function(props) {
  return (
    <button onClick={props.handleSubmit}>Checkout</button>
  )
}

const CreateAccount = function(props) {
  return (
    // <div>Create Account</div>
    <form onSubmit={props.handleUpdate}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={props.name}
          onChange={props.handleInputChange} />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="text"
          value={props.email}
          onChange={props.handleInputChange} />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="text"
          value={props.password}
          onChange={props.handleInputChange} />
      </label>
      <input type="submit" value="Submit"/>
    </form>
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
      currentPage: 'home'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit() {
    $.get('http://localhost:3000/checkout', (id) => {
      console.log(id);
      this.setState(id)
      this.setState({
        currentPage: 'name'
      })
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    console.log(this.state);
    let data = this.state;
    $.post('http://localhost:3000/checkout', data, () => {
      console.log('Sent updated data to the server');
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
    if (this.state.currentPage === 'home') {
      return <Home handleSubmit={this.handleSubmit}/>
    } else if (this.state.currentPage === 'name') {
      return <CreateAccount handleInputChange={this.handleInputChange} handleUpdate={this.handleUpdate}/>
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