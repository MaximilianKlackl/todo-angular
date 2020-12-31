import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "../models/Todo"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() todo: Todo;

  @Output() deleteTodoEvent = new EventEmitter<Todo>();

  deleteTodo(todo: Todo){
    this.deleteTodoEvent.emit(todo);    
  }
}
