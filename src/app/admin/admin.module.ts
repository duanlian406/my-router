import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRouteModule } from './admin-route/admin-route.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRouteModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, ManageHeroesComponent, ManageCrisesComponent]
})
export class AdminModule { }
