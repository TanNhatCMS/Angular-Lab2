import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {isNotVoid} from "typed-assert";

@Component({
  selector: 'app-bai3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div *ngIf="isVisible" class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header text-center text-primary">
            <h4>Nhập Xuất mảng 1 chiều</h4>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="">Nhập N</label>
              <input type="text" name="" #newItem id="" class="form-control"
                     placeholder=""
                     aria-describedby="helpId">
            </div>
          </div>
          <div class="card-footer text-danger">
            <button type="button" class="btn btn-primary"
                    (click)="AddItem(newItem.value)">Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `,

})
export class Bai3Component {
  @Output() newItem = new EventEmitter<string>()
  AddItem(value: string) {
    this.newItem.emit(value)
  }
  @Input() isVisible!: boolean;
}
