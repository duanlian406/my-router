import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadModules = [];
  preload(route, load) {
    if (route.data && route.data.preload) {
      this.preloadModules.push(route.path);
      return load();
    }
    return of(null);
  }
  constructor() { }
}
