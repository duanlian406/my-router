import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from '../crisis-center/crisis-center.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from '../crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from '../crisis-detail/crisis-detail.component';
import { CrisisDetailResolverService } from '../crisis-detail-resolver.service';

const routes: Routes = [
  {
    path: '', component: CrisisCenterComponent, children: [
      {
        path: '', component: CrisisListComponent, children: [
          { path: '', component: CrisisCenterHomeComponent },
          { path: ':id', component: CrisisDetailComponent, resolve: { crisis: CrisisDetailResolverService } }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CrisisRouteModule { }
