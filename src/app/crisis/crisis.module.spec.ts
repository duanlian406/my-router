import { CrisisModule } from './crisis.module';

describe('CrisisModule', () => {
  let crisisModule: CrisisModule;

  beforeEach(() => {
    crisisModule = new CrisisModule();
  });

  it('should create an instance', () => {
    expect(crisisModule).toBeTruthy();
  });
});
