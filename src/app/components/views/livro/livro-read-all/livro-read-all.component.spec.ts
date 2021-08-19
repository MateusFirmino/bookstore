import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroReadAllComponent } from './livro-read-all.component';

describe('LivroReadAllComponent', () => {
  let component: LivroReadAllComponent;
  let fixture: ComponentFixture<LivroReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroReadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
