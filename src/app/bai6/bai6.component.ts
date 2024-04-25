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
  randomArray: number[] = [];
  ArrayNumeric: number[] = [];
  N: any | 0;
  generateRandomArray() {
    const length = this.N;
    let minValue = 1;
    this.randomArray = [];
    this.ArrayNumeric = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (100 - minValue + 1)) + minValue;
      minValue = randomNumber + 1;
      this.randomArray.push(randomNumber);
    }
    for(let i=0;i<this.randomArray.length;i++){
      if(this.randomArray[i]%2!=0){
        this.ArrayNumeric.push(this.randomArray[i]);
      }
    }
  }
}
