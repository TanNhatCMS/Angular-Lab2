import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-bai1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './bai1.component.html'
})
export class Bai1Component {
  N: any | 0 ;
  KTNT(n: number) {
    if (n < 2) return 0
    for (let i = 2; i < n; i++) {
      if (n % i == 0)
        return 0
    }
    return 1
  }
  LietKe(){
    var str=''
    var n=parseInt(this.N);
    for(let i=1;i< n;i++){
      if(this.KTNT(i)==1){
        str+=i+','
      }
    }
    return str
  }
}
