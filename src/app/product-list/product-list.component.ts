import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { products } from '../products';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  numberItems;

  share(product) {
    window.alert('The product ' + product +' has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when product goes on sale :)');
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.topbar.checkoutNumber();
    window.alert('Your product has been added to the cart.')
  }

  copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }

  constructor(
    private cartService: CartService,
    private topbar: TopBarComponent,
  ) {}

  ngOnInit() {
    this.numberItems = this.topbar.showNumber();
  }
}