import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NavComponent} from "./nav/nav.component";
import {Bai3Component} from "./bai3/bai3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, NavComponent, Bai3Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab2';
  namht = new Date().getFullYear();
  Array: any = []
  Add(item: string) {
    this.Array.push(item)
    console.log(this.Array)
  }
}
