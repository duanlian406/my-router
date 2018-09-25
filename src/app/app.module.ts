import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouteModule } from './app-route/app-route.module';
import { HeroesModule } from './heroes/heroes.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComposeComponent } from './compose/compose.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComposeComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRouteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(route: Router) {
    console.log(JSON.stringify(route.config, null, 2));
  }
}
