import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@dibog/shared';

@Component({
  selector: 'dibog-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Input() todos: Todo[];
}
