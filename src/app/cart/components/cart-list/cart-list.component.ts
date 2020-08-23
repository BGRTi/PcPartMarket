import { Component, Input, OnInit } from '@angular/core';

import { Part } from '../../../parts/services/parts.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() cartList: Array<Part>;

  emptyCartPrice: number;

  constructor() { }

  ngOnInit(): void {
    this.emptyCartPrice = 0;
  }

  onCountDecrease(part: Part, index: number): void {
    const COUNT_INDEX = 1;

    part.count === COUNT_INDEX ? this.cartList.splice(index, COUNT_INDEX) : part.count--;
  }

  onCountIncrease(part: Part): void {
    part.count++;
  }

  getTotalPrice(): number {
    return this.cartList.reduce((total: number, currentPart: Part) => {
      return total + currentPart.price * currentPart.count;
    }, this.emptyCartPrice);
  }
}
