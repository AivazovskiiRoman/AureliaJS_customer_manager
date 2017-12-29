import { Customer } from './customer';

export class App {
  constructor() {
    this.heading = 'Customer Manager';
    this.customers = this.getCustomersFromStorage();
    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
  }

  addCustomer() {
    if(this.customerName && this.customerEmail && this.customerPhone) {
      // add new record to array
      this.customers.push(new Customer (this.customerName, this.customerEmail, this.customerPhone));
      // store in LS
      this.storageCustomers(this.customerName, this.customerEmail, this.customerPhone);
      // clear fields
      this.customerName = '';
      this.customerEmail = '';
      this.customerPhone = '';
    }
  }

  getCustomersFromStorage() {
    let customers;
    if (localStorage.getItem('customers') === null) {
      customers = [];
    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }

    return customers;
  }

  storageCustomers(name, email, phone) {
    let customers;
    if (localStorage.getItem('customers') === null) {
      customers = [];
    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }

    customers.push({ name: name, email: email, phone: phone });
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  removeCustomer(customer) {
    let index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }

    this.removeCustomerFromStoreg(index);
  }

  removeCustomerFromStoreg (index) {
    let customers = JSON.parse(localStorage.getItem('customers'));

    customers.splice(index, 1);

    localStorage.setItem('customers', JSON.stringify(customers));
  }

}