import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../crisis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crisis-center-home',
  templateUrl: './crisis-center-home.component.html',
  styleUrls: ['./crisis-center-home.component.scss']
})
export class CrisisCenterHomeComponent implements OnInit {
  items;
  activeId;
  constructor(private route: ActivatedRoute, private service: CrisisService) { }

  ngOnInit() {
    this.items = this.service.getList();
    this.route.paramMap.subscribe(params => this.activeId = +params.get('id'));
  }
}
