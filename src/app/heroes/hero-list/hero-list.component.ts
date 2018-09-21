import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  items;
  activeId;
  constructor(private service: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.service.getList();
    this.route.paramMap.subscribe(params => this.activeId = +params.get('id'));
  }

}
