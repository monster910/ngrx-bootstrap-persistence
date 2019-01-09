import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {workflowReducer} from './workflowReducer';
import {debug} from './debugReducer';
import {persistenceReducer} from './persistenceReducer';
import {RouterModule, Routes} from '@angular/router';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';

// routes
export const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: '../modules/dashboard/dashboard.module#DashboardModule' },
  { path: 'settings', loadChildren: '../modules/settings/settings.module#SettingsModule' },
  { path: 'reports', loadChildren: '../modules/reports/reports.module#ReportsModule' }
];

export const metaReducers: MetaReducer<any>[] = [debug, persistenceReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({workflow: workflowReducer, router: routerReducer}, {metaReducers}),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
