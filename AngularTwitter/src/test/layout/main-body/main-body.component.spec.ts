import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyComponent } from '../../../app/layout/main-body/main-body.component';
import {ApiService} from '../../../app/common/service/api/api.service';
import {DataService} from '../../../app/common/service/data/data.service';
import {DataServiceMock} from '../../mock/dataServiceMock';
import {ApiServiceMock} from '../../mock/apiServiceMock';

describe('MainBodyComponent', () => {
  let component: MainBodyComponent;
  let fixture: ComponentFixture<MainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainBodyComponent
      ],
      providers: [
        {provide: DataService, useClass: DataServiceMock},
        {provide: ApiService, useClass: ApiServiceMock}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
