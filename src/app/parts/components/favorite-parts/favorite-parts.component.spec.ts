import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePartsComponent } from './favorite-parts.component';

describe('FavoritePartsComponent', () => {
  let component: FavoritePartsComponent;
  let fixture: ComponentFixture<FavoritePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
