import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryWiseComponent } from './catagory-wise.component';

describe('CatagoryWiseComponent', () => {
  let component: CatagoryWiseComponent;
  let fixture: ComponentFixture<CatagoryWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
