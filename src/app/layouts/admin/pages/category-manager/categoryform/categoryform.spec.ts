import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoryform } from './categoryform';

describe('Categoryform', () => {
  let component: Categoryform;
  let fixture: ComponentFixture<Categoryform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categoryform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categoryform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
