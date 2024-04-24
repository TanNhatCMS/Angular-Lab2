import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai2.component.html'
})
export class Bai2Component {
  N: any | 0 ;
  KTCP(C: number){
    var n=Math.floor(Math.sqrt(C));
    if(n*n==C) return 1;
    return 0;
  }
  LietKe(){
    var str=''
    var n=parseInt(this.N);
    for(let i=1;i< n;i++){
      if(this.KTCP(i)==1){
        str+=i+','
      }
    }
    return str
  }
}
