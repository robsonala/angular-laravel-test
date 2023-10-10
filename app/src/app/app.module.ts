import { HttpClientModule } from "@angular/common/http";
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';

@NgModule({
              declarations: [
                  AppComponent,
                  StudentsComponent,
                  StudentComponent,
              ],
              imports:      [
                  BrowserModule,
                  AppRoutingModule,
                  HttpClientModule,
              ],
              providers:    [],
              bootstrap:    [ AppComponent ],
          })
export class AppModule {}
