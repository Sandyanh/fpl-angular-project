import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreItem } from './explore-item';

describe('ExploreItem', () => {
  let component: ExploreItem;
  let fixture: ComponentFixture<ExploreItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
