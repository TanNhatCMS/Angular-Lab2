import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai4.component.html'
})
export class Bai4Component {
  randomArray: number[] = [];
  N: any | 0;
  kq: any;
  generateRandomArray() {
    const length = this.N;
    const min = 1;
    const max = 100;
    this.randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      this.randomArray.push(randomNumber);
    }
    this.kq = this.randomArray.join(', ');
  }
}
