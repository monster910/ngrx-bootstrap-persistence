import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { DashboardComponent } from './dashboard.component';
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';

// routes
export const ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbTabsetModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
