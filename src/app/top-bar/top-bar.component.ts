import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  numberItems:number=0;

  checkoutNumber() {
  	//console.log(1 + this.numberItems);
	//this.numberItems = this.cartService.getLen();
	setTimeout(()=>this.numberItems = this.cartService.getLen(),0); // instead of this.num = 2;
	console.log(this.numberItems);
	this.changeDetectorRef.detectChanges();
   	//console.log(2 + this.numberItems);
  }

  showNumber() {
  	return Number(this.numberItems);
  }

  constructor(
  	private cartService: CartService,
  	private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {}

}