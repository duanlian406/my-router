import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { HeroesService } from './heroes.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroDetailResolverService implements Resolve<any> {
  resolve(route) {
    const id = route.paramMap.get('id');
    return this.service.getDetail(id).pipe(map(item => {
      if (item) {
        return item;
      }
      this.router.navigate(['/heroes']);
      return null;
    }));
  }
  constructor(private service: HeroesService, private router: Router) { }
}
