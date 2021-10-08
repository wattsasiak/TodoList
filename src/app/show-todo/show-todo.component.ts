import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

 Todos: Todo[] = [
    {task:'Research AWS Certifications' , completed: false},
    {task:'Complete Angular Lab' , completed: true},
    {task:'Look up flights for vacay' , completed: false},
    {task:'Go shopping!' , completed: false}
  ];
  
  todo: Todo;



  constructor() { }

  ngOnInit(): void {
  }



  completeTodo = function (todo: Todo): void {
    todo.completed = true;
  };





}
