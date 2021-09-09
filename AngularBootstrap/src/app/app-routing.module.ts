import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpdateEmpComponent } from './components/update-emp/update-emp.component';


const routes: Routes = [
  { path: '', component: EmpListComponent, pathMatch: 'full' },
  { path: 'emp-list', component: EmpListComponent },
  { path: 'update/:id', component: UpdateEmpComponent },
  { path: 'emp-form', component: EmpFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
