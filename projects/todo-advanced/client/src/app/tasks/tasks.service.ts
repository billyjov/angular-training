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

  public tasks$: Observable<Task[]> = this.getRequestsCounter2.asObservable().pipe(shareReplay(1));

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

  public getTasks(): void {
    const req = this.http.get<Task[]>(`${this.API_BASE_URL}/api/tasks`);

    req.subscribe((tasks: Task[]) => {
      this.getRequestsCounter2.next(tasks);
    });
    // this.getRequestsCounter2.next(req);

    // return this.http.get<Task[]>(`${this.API_BASE_URL}/api/tasks`);
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.API_BASE_URL}/api/tasks`, task);
  }
}
