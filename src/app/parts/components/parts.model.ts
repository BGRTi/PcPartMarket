/**
 * Task Model
 */
export class Part {
    constructor(
        public id: number = null,
        public manufacturer: string,
        public model: string,
        public type: string,
        public price: number
    ) {}
  }
  