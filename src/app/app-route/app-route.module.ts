import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ComposeComponent } from '../compose/compose.component';
import { AuthGuardService } from '../auth-guard.service';
import { SelectivePreloadingStrategyService } from '../selective-preloading-strategy.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren: '../admin/admin.module#AdminModule', canLoad: [AuthGuardService] },
  { path: 'crisis-center', loadChildren: '../crisis/crisis.module#CrisisModule', data: { preload: true } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
  { path: 'compose', component: ComposeComponent, outlet: 'popup' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategyService })
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRouteModule { }
