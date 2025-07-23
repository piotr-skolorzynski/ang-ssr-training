import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { map, Observable } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';

import { CoursesCardListComponent } from 'src/app/components';
import { ICourse } from 'src/app/models';
import { CoursesService } from 'src/app/services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatTabsModule, CoursesCardListComponent, AsyncPipe],
})
export class HomeComponent implements OnInit {
  private readonly coursesService = inject(CoursesService);

  public courses$: Observable<ICourse[]>;

  public ngOnInit(): void {
    this.courses$ = this.coursesService
      .findAllCourses()
      .pipe(map(Object.values));
  }
}
