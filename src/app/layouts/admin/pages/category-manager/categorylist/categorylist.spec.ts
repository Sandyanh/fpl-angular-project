import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorylist } from './categorylist';

describe('Categorylist', () => {
  let component: Categorylist;
  let fixture: ComponentFixture<Categorylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
