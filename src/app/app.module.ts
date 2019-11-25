import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicMainComponent } from './dynamic-main/dynamic-main.component';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    DynamicMainComponent,
    DynamicChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
