import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { CrisisService } from './crisis.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CrisisDetailResolverService implements Resolve<any> {
  resolve(route) {
    const id = route.paramMap.get('id');
    return this.service.getDetail(id).pipe(map(v => {
      if (v) {
        return v;
      } else {
        this.router.navigate(['/crisis-center']);
        return null;
      }
    }));
  }
  constructor(private router: Router, private service: CrisisService) { }
}
