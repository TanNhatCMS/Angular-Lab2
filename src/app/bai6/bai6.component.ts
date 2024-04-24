import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai6.component.html',
})
export class Bai6Component {
  SoA: any;
  SoB: any;
  kq: any;
  chon: any;

  Tinh() {
    if(isNaN(this.SoA) || isNaN(this.SoB)){
      this.kq = "Vui lòng nhập số";
      return;
    }
    if(Number(this.SoA)>Number(this.SoB)){
      this.kq = this.SoA;
    }else{
      this.kq = this.SoB;
    }
  }
}
