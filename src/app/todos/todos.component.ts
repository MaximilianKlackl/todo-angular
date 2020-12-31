import { Component, OnInit } from '@angular/core';
import { Todo } from "../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    new Todo(1, "test1", false), 
    new Todo(2, "test2", false),
    new Todo(3, "test3", false),
    new Todo(4, "test4", false)
  ];

  constructor() { }

  ngOnInit(): void {

  }

  TodosObserver(){

  }

  deleteTodo(todo: Todo): void{
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  addTodo(text: string): void{
    let todo: Todo = new Todo(this.nextId(), text, false);
    console.log(text);
    
    this.todos.push(todo)
  }

  private nextId(): number{

    let highestId:number = this.todos[0].id;
    
    this.todos.forEach(todo => {
      if(todo.id > highestId){
        highestId = todo.id;
      }
    });

    return highestId + 1;
  }
}
