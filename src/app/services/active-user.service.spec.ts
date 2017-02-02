/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActiveUserService } from './active-user.service';

describe('ActiveUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveUserService]
    });
  });

  it('should ...', inject([ActiveUserService], (service: ActiveUserService) => {
    expect(service).toBeTruthy();
  }));
});
