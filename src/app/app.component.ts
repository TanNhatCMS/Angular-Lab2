import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NavComponent} from "./nav/nav.component";
import {Bai3Component} from "./bai3/bai3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, NavComponent, Bai3Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lab2';
  namht = new Date().getFullYear();
  Array: any = []
  isBai3Route: boolean = false;
  Add(item: string) {
    this.Array.push(item)
    console.log(this.Array)
  }
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isBai3Route = this.router.url.includes('Lab2_3.html');
      }
    });
  }
}
