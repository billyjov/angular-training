import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListAComponent } from './list-a/list-a.component';
import { ListBComponent } from './list-b/list-b.component';
import { TasksComponent } from './tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, ListAComponent, ListBComponent, TasksComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
