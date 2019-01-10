import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'settings',
  template: `
    <div>
      <h2>Settings</h2>
      <div>Current: {{ (workflow$ | async)?.current}}</div>
    </div>
  `
})
export class SettingsComponent {
  workflow$: Observable<any>;

  constructor(private store: Store<any>) {
    this.workflow$ = store.pipe(select('workflow'));
  }
}
