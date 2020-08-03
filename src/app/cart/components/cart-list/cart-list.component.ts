import { Component, Input } from '@angular/core';

import { Part } from './../../../parts/components/parts.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  @Input() cartList: Array<Part>;

  emptyCartPrice: number = 0;

  constructor() { }

  getTotalPrice(): number {
    return this.cartList.reduce((total: number, currentPart: Part) => {
      return total + currentPart.price;
    }, this.emptyCartPrice)
  }
}
