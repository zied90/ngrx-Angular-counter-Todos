import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from './store/store';
import {DecrementAction, IncrementAction} from './store/actions/counter.action';
import {nSelector} from './store/reducers/counter.reducer';
import {LoadTodosAction} from './store/actions/todos.action';
import {ToDo} from './store/reducers/todos.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-Angular-counter-Todos';
  count: number;

  listUsers: ToDo[] = [];

  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe(data => this.listUsers = data.todos);
    this.load();
  }

  increment() {
    this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(2));
  }

  load() {
    this.store.dispatch((new LoadTodosAction()));
  }
}
