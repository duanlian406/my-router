import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<any> {
  canDeactivate(component) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  constructor() { }
}
