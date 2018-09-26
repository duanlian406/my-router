import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  item;
  value = '';
  constructor(private route: ActivatedRoute, private http: HeroesService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.item = data.hero;
      this.value = data.hero.name;
    });
  }
  save() {
    if (this.value.trim() && this.value.trim() !== this.item.name) {
      this.http.updateList({ type: 'update', data: { id: this.item.id, name: this.value } }).subscribe(res => {
        if (!res.state) {
          this.item.name = this.value;
        } else {
          alert(res.msg);
        }
      });
    }
  }
  canDeactivate() {
    if (this.value !== this.item.name) {
      return confirm('do you want discard changes?');
    }
    return true;
  }
}
