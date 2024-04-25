import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai7',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './bai7.component.html',
})
export class Bai7Component {
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
      if(Math.sqrt(this.randomArray[i])%1==0){
        this.ArrayNumeric.push(this.randomArray[i]);
      }
    }
  }
}
