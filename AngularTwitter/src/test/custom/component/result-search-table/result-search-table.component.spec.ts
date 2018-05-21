import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchTableComponent } from '../../../../app/custom/component/result-search-table/result-search-table.component';

describe('ResultSearchTableComponent', () => {
  let component: ResultSearchTableComponent;
  let fixture: ComponentFixture<ResultSearchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSearchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
