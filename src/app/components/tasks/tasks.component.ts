import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   tasks: Task[] = []
  constructor(private taskServiceData: TaskService) { }

  ngOnInit(): void {
    this.taskServiceData.getTasks().subscribe((tasks) => this.tasks = tasks )
  }

  deleteTask(id: number | undefined) {
      this.taskServiceData.deleteTaskByID(id).subscribe((task) => {
        return this.tasks = this.tasks.filter(t => t.id !== id)
      } )
  }
  toggleReminderTask(task: Task) {
    task.reminder = !task.reminder
    this.taskServiceData.updateTaskReminder(task).subscribe()
  }

  addNewTaskItem(task: Task) {
      this.taskServiceData.addTask(task).subscribe((task) => this.tasks.push(task))
  }
}