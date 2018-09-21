import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  item;
  value = '';
  constructor(private route: ActivatedRoute, private service: HeroesService) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap(params => this.service.getDetail(params.get('id')))).subscribe(item => {
      this.item = item;
      this.value = item.name;
    });
  }
  save() {
    this.item.name = this.value;
  }
  cancel() {
    this.value = this.item.name;
  }
  canDeactivate() {
    if (this.value !== this.item.name) {
      return confirm('do you want discard changes?');
    }
    return true;
  }
}
