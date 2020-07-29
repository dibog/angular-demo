import { Component } from '@angular/core';
import { Todo, uppercase } from '@dibog/shared';

@Component({
  selector: 'dibog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  addTodo() {
      const title = uppercase(`New todo ${Math.floor(Math.random() * 1000)}`);
      this.todos.push({ title });
  }
}
