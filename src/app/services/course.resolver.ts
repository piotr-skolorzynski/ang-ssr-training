import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { first, Observable } from 'rxjs';

import { ICourse } from '../models';
import { CoursesService } from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<ICourse> {
  private readonly coursesService = inject(CoursesService);

  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<ICourse> {
    const courseId = route.params['id'];

    return this.coursesService.findCourseById(courseId).pipe(first());
  }
}
