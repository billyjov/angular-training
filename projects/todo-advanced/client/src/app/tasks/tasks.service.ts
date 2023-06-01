import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './shared/models/task.model';
import { Observable, Subject, share, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly API_BASE_URL = 'http://localhost:2000';
  private getRequestsCounter!: Observable<Task[]>;
  private getRequestsCounter2: Subject<Task[]> = new Subject<Task[]>();

  // public tasks$: Observable<Task[]> = this.getRequestsCounter2.asObservable();
  public tasks$!: Observable<Task[]>;

  // Loesung 2: Caching

  private tasksCache$!: Observable<Task[]>;

  // .pipe(shareReplay(1));

  constructor(private http: HttpClient) {}

  // Loesung 1: Caching mit share()
  // public getTasks(): Observable<Task[]> {
  //   if (!this.getRequestsCounter) {
  //     this.getRequestsCounter = this.http
  //       .get<Task[]>(`${this.API_BASE_URL}/api/tasks`)
  //       .pipe(share());
  //   }

  //   return this.getRequestsCounter;
  // }

  public getAllTasks(): Observable<Task[]> {
    if (!this.tasksCache$) {
      this.tasksCache$ = this.getRequestsCounter2;
    }

    return this.tasksCache$;
  }

  public getTasks(): void {
    console.log('tasks: ', this.tasks$);
    if (!this.tasks$) {
      console.log('tasks$: ', this.tasks$)
      this.tasks$ = this.http
        .get<Task[]>(`${this.API_BASE_URL}/api/tasks`)
        .pipe(share());
    }

    this.subscribeToTasks();
    // const req = this.http
    //   .get<Task[]>(`${this.API_BASE_URL}/api/tasks`)
    //   .pipe(share());

    // req.subscribe((tasks: Task[]) => {
    //   this.getRequestsCounter2.next(tasks);
    // });
    // this.getRequestsCounter2.next(req);

    // return this.http.get<Task[]>(`${this.API_BASE_URL}/api/tasks`);
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.API_BASE_URL}/api/tasks`, task);
  }

  private subscribeToTasks(): void {
    this.tasks$.subscribe((tasks: Task[]) => {
      console.log('tasks elems: ', tasks);
      this.getRequestsCounter2.next(tasks);
    });
  }
}
