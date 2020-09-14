import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  // Methods to communicate with cart items
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  getLen() {
    return Number(this.items.length);
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  removeItem(i) {
    this.items.splice(i,1);
  }
  getItem(i) {
    return this.items[i];
  }
  constructor() { }

}