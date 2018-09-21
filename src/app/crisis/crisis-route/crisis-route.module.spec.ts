import { CrisisRouteModule } from './crisis-route.module';

describe('CrisisRouteModule', () => {
  let crisisRouteModule: CrisisRouteModule;

  beforeEach(() => {
    crisisRouteModule = new CrisisRouteModule();
  });

  it('should create an instance', () => {
    expect(crisisRouteModule).toBeTruthy();
  });
});
