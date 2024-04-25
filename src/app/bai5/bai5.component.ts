import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai5.component.html'
})
export class Bai5Component {

  randomArray: number[] = [];

  generateRandomArray() {
    const length = 10;
    let minValue = 1;
    this.randomArray = [];

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (100 - minValue + 1)) + minValue;
      minValue = randomNumber + 1;
      this.randomArray.push(randomNumber);
    }
  }
}
