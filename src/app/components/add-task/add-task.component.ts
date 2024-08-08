import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  { Task } from '../../Task'
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string = ''
  day: string = ''
  reminder: boolean = false;
  showAddTask: boolean = false 
  subscription: Subscription = new Subscription();
  
  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice
      .onToggle()
      .subscribe((v) => (this.showAddTask = v));
   }

  ngOnInit(): void {
  }

  handleSubmit() {
    if(!this.text) {
      alert('Please add a task')
      return
    }

    const newTask = { 
      text: this.text,  
      day: this.day,
      reminder: this.reminder
    }

     this.onAddTask.emit(newTask)


    this.text = ''
    this.reminder = false
    this.day = ''
  }
}
