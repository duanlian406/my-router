import { HeroesRouteModule } from './heroes-route.module';

describe('HeroesRouteModule', () => {
  let heroesRouteModule: HeroesRouteModule;

  beforeEach(() => {
    heroesRouteModule = new HeroesRouteModule();
  });

  it('should create an instance', () => {
    expect(heroesRouteModule).toBeTruthy();
  });
});
