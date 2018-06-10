import { TestBed, inject } from '@angular/core/testing';

import { WorkerDataService } from './worker-data.service';

describe('WorkerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerDataService]
    });
  });

  it('should be created', inject([WorkerDataService], (service: WorkerDataService) => {
    expect(service).toBeTruthy();
  }));
});
