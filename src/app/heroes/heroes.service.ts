import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class HeroesService {
  Heroes$: BehaviorSubject<any> = new BehaviorSubject([]);
  HEROES: any = [];
  getList() {
    return this.Heroes$;
  }
  getDetail(id) {
    return of(this.HEROES.find(item => item.id === +id));
  }
  updateList(option) {
    return this.http.post('api/updateList', option);
  }
  constructor(private http: HttpClient) {
    this.http.get('api/getHeroList').subscribe(data => this.Heroes$.next(this.HEROES = data));
  }
}
