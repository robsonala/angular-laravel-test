import { Component } from '@angular/core';
import { StudentsService } from '../service/students.service';
import { Student } from "../service/model/student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  public students: Student[] = [];
  public selectedStudent?: Student;

  constructor(private studentService: StudentsService) {
    studentService.getStudents().subscribe(res => {
      this.students = res;
    })
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}

