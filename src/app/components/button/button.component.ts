import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;

  @Output() btnClick;

  constructor() {
    this.text = '';
    this.color = '';
    this.btnClick = new EventEmitter();
  }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
