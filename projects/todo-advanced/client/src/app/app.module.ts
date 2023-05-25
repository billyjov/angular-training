import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
