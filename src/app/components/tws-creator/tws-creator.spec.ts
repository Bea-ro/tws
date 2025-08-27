import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwsCreator } from './tws-creator';

describe('TwsCreator', () => {
  let component: TwsCreator;
  let fixture: ComponentFixture<TwsCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwsCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwsCreator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
