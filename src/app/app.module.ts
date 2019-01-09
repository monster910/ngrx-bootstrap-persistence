import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {workflowReducer} from './workflowReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTabsetModule,
    StoreModule.forRoot({workflow: workflowReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
