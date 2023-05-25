import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public taskForm!: FormGroup;
  private datePipe: DatePipe = new DatePipe('en-US');

  constructor(
    private formBuilder: FormBuilder,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.buildTaskForm();
  }

  public submitTaskForm(): void {
    console.log(this.taskForm.value);

    this.tasksService.addTask(this.taskForm.value).subscribe({
      next: () => {
        this.taskForm.reset();

        this.tasksService.getTasks();
      }
    });
  }

  public get actualDate(): string | null {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  private buildTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      dueDate: [this.actualDate],
    });
  }
}
