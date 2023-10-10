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
    this.loadStudents(null);
  }

  private loadStudents(searchTerm: string | null): void {
    this.studentService.getStudents(searchTerm).subscribe(res => {
      this.students = res;
    })
  }

  filterResults(value: string): void {
    this.loadStudents(value);
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}

