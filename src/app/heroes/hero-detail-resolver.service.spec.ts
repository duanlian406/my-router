import { TestBed, inject } from '@angular/core/testing';

import { HeroDetailResolverService } from './hero-detail-resolver.service';

describe('HeroDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailResolverService]
    });
  });

  it('should be created', inject([HeroDetailResolverService], (service: HeroDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
