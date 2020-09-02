import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/store';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffect} from './store/effects/todo.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
