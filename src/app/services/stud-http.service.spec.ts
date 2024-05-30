import { TestBed } from '@angular/core/testing';

import { StudHttpService } from './stud-http.service';

describe('StudHttpService', () => {
  let service: StudHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
