import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    text: 'Random Task 1',
    day: 'Monday',
    reminder: true
  }

  @Output() onDeleteTask: EventEmitter<number | undefined> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimesIcon = faTimes
  constructor() { 
   
  }

  ngOnInit(): void {
  }

  handleDelete(id: number | undefined) {
    this.onDeleteTask.emit(id)
  }

  onClickOfTaskItem(task: Task) {
     this.onToggleReminder.emit(task)
  }

}
