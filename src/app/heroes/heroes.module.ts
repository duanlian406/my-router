import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRouteModule } from './heroes-route/heroes-route.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesService } from './heroes.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HeroesRouteModule,
    FormsModule
  ],
  declarations: [HeroDetailComponent, HeroListComponent],
  providers: [HeroesService],
})
export class HeroesModule { }
