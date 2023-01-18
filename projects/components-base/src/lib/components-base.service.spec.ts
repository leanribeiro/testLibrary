import { TestBed } from '@angular/core/testing';

import { ComponentsBaseService } from './components-base.service';

describe('ComponentsBaseService', () => {
  let service: ComponentsBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
