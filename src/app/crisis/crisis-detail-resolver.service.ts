import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { CrisisService } from './crisis.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class CrisisDetailResolverService implements Resolve<any> {
  resolve(route) {
    const id = route.paramMap.get('id');
    return of(id).pipe(switchMap(data => this.service.getDetail(data), (ov, iv) => {
      if (iv) {
        return iv;
      } else {
        this.router.navigate(['/crisis-center']);
        return null;
      }
    }));
  }
  constructor(private router: Router, private service: CrisisService) { }
}
