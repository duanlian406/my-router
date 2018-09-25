import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './compose.component.html',
  styles: [],
})
export class ComposeComponent {

  details: string;
  message: string;
  sending = false;

  constructor(private router: Router, private service: HttpClient) { }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    this.service.get('api/getData').subscribe(console.log);
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 2000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
