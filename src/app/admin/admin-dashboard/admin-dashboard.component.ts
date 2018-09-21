import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sessionId;
  fragment;
  modules;
  constructor(private route: ActivatedRoute, private service: SelectivePreloadingStrategyService) { }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(map(params => params.get('sessionId')));
    this.fragment = this.route.fragment.pipe(map(fragment => fragment || 'null'));
    this.modules = this.service.preloadModules;
  }

}
