import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from '../manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from '../manage-crises/manage-crises.component';
import { AuthGuardService } from '../../auth-guard.service';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [AuthGuardService], children: [
      {
        path: '',
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: 'crises', component: ManageCrisesComponent }
        ],
        canActivateChild: [AuthGuardService]
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRouteModule { }
