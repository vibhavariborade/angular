import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPhotoComponent } from './fav-photo.component';

describe('FavPhotoComponent', () => {
  let component: FavPhotoComponent;
  let fixture: ComponentFixture<FavPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
