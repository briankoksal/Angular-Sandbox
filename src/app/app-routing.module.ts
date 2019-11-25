import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PolicyListComponent } from './policy-list/policy-list.component'
import { DynamicMainComponent } from './dynamic-main/dynamic-main.component'


const routes: Routes = [
  { path: 'policylist', 
    component: PolicyListComponent 
  },{
    path: 'dynamicmain',
    component: DynamicMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
