import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { SettingsComponent } from './settings.component';
import {CommonModule} from '@angular/common';

// routes
export const ROUTES: Routes = [
  { path: '', component: SettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}
