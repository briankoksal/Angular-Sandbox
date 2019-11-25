import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMainComponent } from './dynamic-main.component';

describe('DynamicMainComponent', () => {
  let component: DynamicMainComponent;
  let fixture: ComponentFixture<DynamicMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
