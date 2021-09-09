import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpdateEmpComponent } from './components/update-emp/update-emp.component';
import { EmployeeService } from './services/employee.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    EmpListComponent,
    NotFoundComponent,
    UpdateEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
