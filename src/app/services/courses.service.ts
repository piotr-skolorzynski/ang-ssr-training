import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICourse, ILesson } from '../models';

@Injectable()
export class CoursesService {
  private readonly http = inject(HttpClient);
  private readonly API_URL =
    'https://angular-universal-course-94047.firebaseio.com';

  public findCourseById(courseId: string): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.API_URL}/courses/${courseId}.json`);
  }

  public findAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.API_URL}/courses.json`);
  }

  public findAllCourseLessons(courseId: string): Observable<ILesson[]> {
    return this.http.get<ILesson[]>(`${this.API_URL}/lessons/${courseId}.json`);
  }
}
