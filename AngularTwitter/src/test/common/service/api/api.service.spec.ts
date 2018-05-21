import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from '../../../../app/common/service/api/api.service';
import {HttpClient} from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        HttpClient
      ]
    });
  });

  // it('should be created', inject([ApiService], (service: ApiService) => {
  //   expect(service).toBeTruthy();
  // }));
});
