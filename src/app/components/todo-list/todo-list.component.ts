import { Component, OnInit } from '@angular/core';

import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  beforeEditTodoCache: string;
  checkAll: boolean;
  idForNextTodo: number;
  todoTitle: string;
  todoPlaceholder: string;
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.beforeEditTodoCache = '';
    this.checkAll = false;
    this.idForNextTodo = 3;
    this.todoTitle = '';
    this.todoPlaceholder = 'What needs to be done?';
    this.todos = [
      {
        id: 1,
        title: 'Clean room',
        isCompleted: true,
        isEditing: false,
      },
      {
        id: 2,
        title: 'Clean outside',
        isCompleted: false,
        isEditing: false,
      }
    ];
  }

  handleAddTodo() : void {
    if(this.todoTitle.trim().length === 0){
      return;
    }

    this.todos.push({
      id: this.idForNextTodo,
      title: this.todoTitle,
      isCompleted: false,
      isEditing: false
    });

    this.todoTitle = '';
    this.idForNextTodo++;
  }

  handleDeleteTodo(id: number) : void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  handleEditTodo(todo: Todo) : void {
    this.beforeEditTodoCache = todo.title;
    todo.isEditing = true;
  }

  handleCancelEditTodo(todo: Todo) : void {
    todo.title = this.beforeEditTodoCache;
    todo.isEditing = false;
  }

  handleDoneEditingTodo(todo: Todo) : void {
    if(this.todoTitle.trim().length === 0){
      todo.title = this.beforeEditTodoCache;
    }

    todo.isEditing = false;
  }

  handleCompletedTodo(todo: Todo) : void {
    todo.isCompleted = !todo.isCompleted;
  }

  handleCheckAllTodos() : void {
    this.todos.forEach(todo => todo.isCompleted = (<HTMLInputElement>event.target).checked);
  }
}
