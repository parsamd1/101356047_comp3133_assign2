import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { EmployeeActionComponent } from './employee-action/employee-action.component'; // Import your component

@NgModule({
  declarations: [
     // Add your component to declarations
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
