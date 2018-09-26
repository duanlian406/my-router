import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { CanDeactivateGuardService } from '../../can-deactivate-guard.service';
import { HeroDetailResolverService } from '../hero-detail-resolver.service';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'heroes', component: HeroListComponent },
      {
        path: 'hero/:id',
        component: HeroDetailComponent,
        canDeactivate: [CanDeactivateGuardService],
        resolve: { hero: HeroDetailResolverService }
      },
      { path: '', component: HeroListComponent }
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
export class HeroesRouteModule { }
