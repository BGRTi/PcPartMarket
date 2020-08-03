import { Component, OnInit } from '@angular/core';

import { Part } from './parts/components/parts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartList = [];
  title = 'pc-part-market'; // не используется

  ngOnInit(): void {}

  onBuyPart(part: Part): void {
    console.log('part added to cart');
    this.cartList.push(part);
    console.log(this.cartList);
  }
}
