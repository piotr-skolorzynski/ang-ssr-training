import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ICourse } from 'src/app/models';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrl: './courses-card-list.component.scss',
  imports: [MatCardModule, MatButtonModule, RouterLink],
})
export class CoursesCardListComponent {
  public courses = input.required<ICourse[]>();

  private readonly dialog = inject(MatDialog);

  editCourse({ description, longDescription, category }: ICourse): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      description,
      longDescription,
      category,
    };

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe((val) => console.log('Dialog output:', val));
  }
}
