import { Task } from './../../TASK';
import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;
  constructor() {
    this.task = {
      id: 0,
      text: '',
      day: '',
      reminder: true,
    };
  }

  ngOnInit(): void {}
}
