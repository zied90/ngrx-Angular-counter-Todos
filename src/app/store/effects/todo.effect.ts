import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {FailedAction, LOAD, SuccessAction} from '../actions/todos.action';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class TodoEffect {
  todoEffect = createEffect(() => this.action.pipe(
    ofType(LOAD),
    mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((data) => new SuccessAction(data)),
        catchError((err) => of(new FailedAction(err)))
      ))
  ));

  constructor(private http: HttpClient, private action: Actions) {
  }
}
