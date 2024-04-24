import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
})
export class HomeComponent{

}
