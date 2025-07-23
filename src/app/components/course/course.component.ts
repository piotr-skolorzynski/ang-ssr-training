import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ICourse, ILesson } from 'src/app/models';
import { CoursesService } from 'src/app/services';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  imports: [MatProgressSpinnerModule, MatTableModule],
})
export class CourseComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly coursesService = inject(CoursesService);

  public course: ICourse;
  public dataSource: MatTableDataSource<ILesson>;
  public displayedColumns = ['seqNo', 'description', 'duration'];

  public ngOnInit(): void {
    this.course = this.route.snapshot.data['course'];

    this.dataSource = new MatTableDataSource([]);

    this.coursesService
      .findAllCourseLessons(this.course.id)
      .subscribe((lessons) => (this.dataSource.data = lessons));
  }
}
