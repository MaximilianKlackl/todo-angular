import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  text:any;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() addTodoEvent = new EventEmitter<string>();

  addTodo(){    
    this.addTodoEvent.emit(this.text);
    this.text = "";    
  }
}
