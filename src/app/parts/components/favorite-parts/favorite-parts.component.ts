import {
  Component,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';

import {FavoriteTitleComponent} from '../favorite-title/favorite-title.component';

@Component({
  selector: 'app-favorite-parts',
  templateUrl: './favorite-parts.component.html',
  styleUrls: ['./favorite-parts.component.scss']
})
export class FavoritePartsComponent implements AfterViewChecked {
  @ViewChildren(FavoriteTitleComponent) children: QueryList<FavoriteTitleComponent>;

  constructor() { }

  ngAfterViewChecked(): void {
    this.children.first.onClick();
  }
}
