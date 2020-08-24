import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTitleComponent } from './favorite-title.component';

describe('FavoriteTitleComponent', () => {
  let component: FavoriteTitleComponent;
  let fixture: ComponentFixture<FavoriteTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
