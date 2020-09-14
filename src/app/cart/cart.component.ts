import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Shows added items in the cart
  items;
  prices=[];
  totalsum:number=0;
  //checkoutForm;

  // Extracting prices from Added objects
  getPrices() {
    for(let value of this.items) {
      this.prices.push(value.price);
    }
  }

  // Get sum
  getSum() {
    for(let value of this.prices) {
      this.totalsum = this.totalsum + value;
    }
  }
  // Debug function
  printPrices() {
    for (let value of this.prices) {
      console.log(value);
    }
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
    this.totalsum=0;
    window.alert("Your order has been placed successfully :)");
  }

  // Removing element from the cart
  removeItem(i) {
    this.totalsum = this.totalsum - this.cartService.getItem(i).price;
    this.cartService.removeItem(i);
    window.alert("Item deleted successfully");
  }
  constructor(
    private cartService: CartService,
    // private formBuilder: FormBuilder,
  ) { 
    // this.checkoutForm = this.formBuilder.group({
    //   name: '',
    //   address: '',
    //   phone: ''
    // })
  }

  ngOnInit() {
    // To get the cart
    this.items = this.cartService.getItems();

    // To find sum of the cart
    this.getPrices();
    this.getSum();
  }

}