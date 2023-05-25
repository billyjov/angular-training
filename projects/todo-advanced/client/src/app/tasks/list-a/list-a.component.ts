import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { TasksService } from '../tasks.service';
import { Task } from '../shared/models/task.model';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.css']
})
export class ListAComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.tasksService.tasks$;
  // public tasks$: Observable<Task[]> = this.tasksService.getTasks();

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks();
  }
}
