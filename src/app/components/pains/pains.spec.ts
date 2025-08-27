import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pains } from './pains';

describe('Pains', () => {
  let component: Pains;
  let fixture: ComponentFixture<Pains>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pains]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pains);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
