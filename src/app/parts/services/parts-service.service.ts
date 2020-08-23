import { Injectable } from '@angular/core';

import { Part } from './parts.model';

@Injectable({
  providedIn: 'root'
})
export class PartsServiceService {

  constructor() { }

  public getProducts(): Array<Part> {
    return [
      new Part(1, 'NZXT', 'H210i', 'case', 80),
      new Part(2, 'NZXT', 'H500i', 'case', 120),
      new Part(3, 'Nvidia', 'RTX 2070 Super', 'videocard', 280),
      new Part(4, 'AMD', 'RX5700 XT', 'videocard', 280),
      new Part(5, 'be quiet!', 'Dark Rock Pro 4', 'air cooler', 90),
    ];
  }
}
