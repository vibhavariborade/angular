import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteLinksComponent } from './favourite-links.component';

describe('FavouriteLinksComponent', () => {
  let component: FavouriteLinksComponent;
  let fixture: ComponentFixture<FavouriteLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
