import { Component, inject, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ICourse } from 'src/app/models';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.css',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogActions,
    MatButtonModule,
  ],
})
export class CourseDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<CourseDialogComponent>);

  public form: FormGroup;
  public description: string;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) { description, longDescription, category }: ICourse
  ) {
    this.description = description;

    this.form = this.fb.group({
      description: [description, Validators.required],
      category: [category, Validators.required],
      longDescription: [longDescription, Validators.required],
    });
  }

  public save(): void {
    this.dialogRef.close(this.form.value);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
