import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ICategory } from '../../../../../interfaces/ICategory';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [],
  templateUrl: './categoryform.html',
})
export class CategoryFormComponent {
  private fb = inject(FormBuilder);

  @Input() initialData: Partial<ICategory> = {};
  @Input() mode: 'add' | 'edit' = 'add';

  @Output() submitForm = new EventEmitter<Partial<ICategory>>();
  @Output() cancelEdit = new EventEmitter<void>();

  categoryForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: ['', Validators.required],
    description: [''],
  });

  ngOnInit() {
    if (this.initialData) {
      this.categoryForm.patchValue(this.initialData);
    }
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.submitForm.emit(this.categoryForm.value);
    }
  }
}
