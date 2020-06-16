import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  title = 'To Do : Test PMML';
  todos: object[] = [
    {
      id: 1,
      title: '',
      completed: false,
      editing: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleDeleteTodo() {}

  handleAddTodo() {}
}
