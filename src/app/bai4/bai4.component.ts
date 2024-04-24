import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-bai4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bai4.component.html'
})
export class Bai4Component {
  isReadonly = true;

  isDisabled = false;
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  toggleEnabled() {
    this.isReadonly = !this.isReadonly;
  }
  myClick(){
    alert("Hello");
  }
}
