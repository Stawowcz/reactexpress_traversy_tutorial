import './customers.css';
import React, {Component} from 'react';

class Customers extends Component {
  constructor() {
    super()

    this.state = {
      customers: [],
      products: [],
      orders: []

    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched..',
      customers)));

    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({products}, () => console.log('Products fetched..',
      products)));
    
    fetch('/api/orders')
      .then(res => res.json())
      .then(orders => this.setState({orders}, () => console.log('Products fetched..',
      orders)));
  }

  render() {
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {this.state.customers.map(customer =>
          <li key={customer.id}>{ customer.firstName } { customer.lastName }</li>)}
      </ul>
      <h2>Products</h2>
      <ul>
        {this.state.products.map(product =>
            <li key={product.id}>{ product.name }</li>)} 
      </ul>
      <ul>
      <h2>Orders</h2>
        {this.state.orders.map(order =>
            <li key={order.id}>{ order.name } ordered by { order.customeFirstName } { order.customerLastName }</li>)} 
      </ul>
    </div>
  );
}
}

export default Customers;
