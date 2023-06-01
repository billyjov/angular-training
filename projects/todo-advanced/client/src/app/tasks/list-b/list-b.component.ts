import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../shared/models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list-b',
  templateUrl: './list-b.component.html',
  styleUrls: ['./list-b.component.css'],
})
export class ListBComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.tasksService.getAllTasks();
  // public tasks$: Observable<Task[]> = this.tasksService.tasks$;
  // public tasks$: Observable<Task[]> = this.tasksService.getTasks();

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks();
  }
}
