import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TodosComponent } from "./todos/todos.component";
import { TodoComponent } from "./todo/todo.component";
import { AddTodosComponent } from "../app/add-todos/add-todos.component"
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TodosComponent,
    AddTodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
