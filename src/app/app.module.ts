import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {workflowReducer} from './workflowReducer';
import {debug} from './debugReducer';
import {persistenceReducer} from './persistenceReducer';

export const metaReducers: MetaReducer<any>[] = [debug, persistenceReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTabsetModule,
    StoreModule.forRoot({workflow: workflowReducer}, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
