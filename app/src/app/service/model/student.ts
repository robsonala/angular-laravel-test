export interface Student {
    id: number | string;
    first_name: string;
    last_name: string;
    email: string;
    subject: 'English' | 'Geography' | 'Maths' | 'Science';
    grade: number;

    get gradeColour(): string;
}

export class StudentModel implements Student {
  id: number | string;
  first_name: string;
  last_name: string;
  email: string;
  subject: 'English' | 'Geography' | 'Maths' | 'Science';
  grade: number;

  constructor(student: Student) {
    this.id = student.id;
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.email = student.email;
    this.subject = student.subject;
    this.grade = student.grade;
  }

  get gradeColour(): string {
    if (this.grade >= 80) {
      return 'green';
    }

    if (this.grade >= 50) {
      return 'orange';
    }

    return 'red';
  }
}
