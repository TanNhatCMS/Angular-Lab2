import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai5.component.html'
})
export class Bai5Component {
  SoA: any;
  SoB: any;
  kq: any;
  chon: any;

  Tinh() {
    if(isNaN(this.SoA) || isNaN(this.SoB)){
      this.kq = "Vui lòng nhập số";
      return;
    }
    switch (this.chon) {
      case '+':
        this.kq = Number(this.SoA ) +  Number(this.SoB);
        break;
      case '-':
        this.kq = Number(this.SoA) - Number(this.SoB);
        break;
      case '*':
        this.kq = Number(this.SoA) * Number(this.SoB);
        break;
      case '/':
        if(Number(this.SoB) == 0){
          this.kq = "Không thể chia cho 0";
          break;
        }
        this.kq = Number(this.SoA) / Number(this.SoB);
        break;
      default:
        this.kq = "phép tính không hợp lệ";
        break;
    }
  }
}
