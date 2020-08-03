import { Component, OnInit, Input } from '@angular/core';

import { Part } from './../../../parts/components/parts.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input()
  cartList: Array<Part> = [];
  constructor() { }

  ngOnInit(): void {

  }
}
