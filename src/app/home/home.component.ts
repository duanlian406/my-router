import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  @ViewChild('form', { read: ElementRef }) form;
  ngOnInit() {
  }

  login(username, password) {
    this.auth.login(username, password).subscribe(b => {
      if (b) {
        const url = this.auth.redirectUrl ? this.auth.redirectUrl : '/home';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([url], navigationExtras);
      } else {
        alert('wrong username or password!');
        this.form.nativeElement.reset();
      }
    });
  }
  logout() {
    this.auth.isLogin = false;
  }
}
