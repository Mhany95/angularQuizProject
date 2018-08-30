import { TestBed, inject } from '@angular/core/testing';

import { QuestionManagerService } from './question-manager.service';

describe('QuestionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionManagerService]
    });
  });

  it('should be created', inject([QuestionManagerService], (service: QuestionManagerService) => {
    expect(service).toBeTruthy();
  }));
});
