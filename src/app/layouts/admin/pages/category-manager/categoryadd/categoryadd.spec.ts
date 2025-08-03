import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoryadd } from './categoryadd';

describe('Categoryadd', () => {
  let component: Categoryadd;
  let fixture: ComponentFixture<Categoryadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categoryadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categoryadd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
