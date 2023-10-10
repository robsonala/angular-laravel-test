import { Component } from '@angular/core';
import { StudentsService } from '../service/students.service';
import { Student } from "../service/model/student";

@Component({
               selector:    'app-students',
               templateUrl: './students.component.html',
           })
export class StudentsComponent {
    public students: Student[] = [];

    constructor(private studentService: StudentsService) {
      studentService.getStudents().subscribe(res => {
        this.students = res;
      })
    }

}

