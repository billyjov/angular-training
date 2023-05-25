import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAComponent } from './list-a.component';

describe('ListAComponent', () => {
  let component: ListAComponent;
  let fixture: ComponentFixture<ListAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAComponent]
    });
    fixture = TestBed.createComponent(ListAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
