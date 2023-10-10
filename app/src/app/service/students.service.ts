import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Student } from "./model/student";

@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor() { }

    getStudents(): Observable<Student[]> {
        let students: Student[] = [
          <Student>({
            id: 1,
            first_name: 'Lorem',
            last_name: 'Ipsum',
            email: 'lorem.ipsum@email.com',
            subject: 'English',
            grade: 10
          }),
          <Student>({
            id: 2,
            first_name: 'Dolor',
            last_name: 'Sit',
            email: 'dolor.sit@email.com',
            subject: 'Geography',
            grade: 7
          }),
          <Student>({
            id: 3,
            first_name: 'Amet',
            last_name: 'Consectetur',
            email: 'amet.consectetur@email.com',
            subject: 'Maths',
            grade: 5
          })
        ];

        return of<Student[]>(students);
    }

}
