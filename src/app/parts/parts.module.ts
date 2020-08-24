import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsListComponent } from './components/parts-list/parts-list.component';
import { FavoritePartsComponent } from './components/favorite-parts/favorite-parts.component';
import { FavoriteTitleComponent } from './components/favorite-title/favorite-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PartsListComponent,
    FavoritePartsComponent,
    FavoriteTitleComponent
  ],
  exports: [
    PartsListComponent
  ]
})
export class PartsModule { }
