import { Component, Input } from '@angular/core';
import { Student } from '../service/model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() student?: Student;
}
