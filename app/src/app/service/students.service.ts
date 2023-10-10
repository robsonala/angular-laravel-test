import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Student, StudentModel } from "./model/student";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private studentsApiUrl = '/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    let students: Student[] = [];

    this.http.get<Student[]>(environment.apiBaseUrl + this.studentsApiUrl).subscribe(res => {
      for (const student of res) {
        try {
          students.push(new StudentModel(<Student>(student)));
        } catch (e: any) {
          console.error(e);
        }
      }
    });

    return of<Student[]>(students);
  }

}
