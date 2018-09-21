import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.scss']
})
export class CrisisCenterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  popup() {
    this.router.navigate([{ outlets: { popup: ['compose'] } }]);
  }
}
