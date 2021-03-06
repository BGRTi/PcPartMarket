import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { partsService } from '../../services/parts-service.service';

import { Part } from '../../services/parts.model';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss']
})
export class PartsListComponent implements OnInit {

  @Output() buyPart: EventEmitter<Part> = new EventEmitter<Part>();

  constructor(private partsService: partsService) { }

  parts: Array<Part>;

  ngOnInit(): void {
    this.parts = this.partsService.getProducts();
  }

  onBuyPart(currentPart: Partial<Part>): void {
    const part = new Part(
      currentPart.id,
      currentPart.manufacturer,
      currentPart.type,
      currentPart.model,
      currentPart.price
    );

    this.buyPart.emit(part);
    console.log('add part method', part);
  }
}
