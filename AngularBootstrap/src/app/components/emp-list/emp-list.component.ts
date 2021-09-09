import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

 
  empdata = true;
  employees: Employee[];

  constructor(private EmpService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employees = this.EmpService.f_data;
  }

  deleteEmp(i) {
    if (confirm('Are you sure?')) {
      const index = this.employees.indexOf(i);
      this.employees.splice(index, 1);
    }
  }

  editEmp(editData) {
    this.EmpService.editData = editData;
    this.router.navigate(['/update', editData.id]);
  }
  // public showNotification(type: string, message: string): void {
  //   this.notifier.notify(type, message);
  // }
}


