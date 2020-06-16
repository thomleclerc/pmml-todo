import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: object[] = [
    {
      id: 1,
      title: 'Clean room',
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Clean outside',
      isCompleted: false,
      isEditing: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleDeleteTodoClick() {}

  handleAddTodoClick() {}

  handleCheckboxClick(value: object) {
    console.log(value);
  }
}
