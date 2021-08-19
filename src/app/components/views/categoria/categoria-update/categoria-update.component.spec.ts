import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaUpdateComponent } from './categoria-update.component';

describe('CategoriaUpdateComponent', () => {
  let component: CategoriaUpdateComponent;
  let fixture: ComponentFixture<CategoriaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
