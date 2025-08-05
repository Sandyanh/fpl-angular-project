import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  Editor,
  NgxEditorComponent,
  NgxEditorMenuComponent,
  Toolbar,
} from 'ngx-editor';

@Component({
  selector: 'app-comment',
  imports: [
    ReactiveFormsModule,
    NgxEditorComponent,
    NgxEditorMenuComponent,
    FormsModule,
  ],
  templateUrl: './comment.html',
  styleUrl: './comment.css',
})
export class Comment {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  id = this.route.snapshot.params['id'];

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
  ];

  @Output() commentAdd = new EventEmitter<any>();
  commentForm = new FormGroup({
    content: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  onSubmit() {
    let name: any;
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage) {
      try {
        const { name: username } = JSON.parse(userLocalStorage);
        name = username;
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }

    const payload = {
      ...this.commentForm.value,
      createAt: new Date().toISOString(),
      username: name,
      productId: this.id,
    };
    this.http.post(`http://localhost:3000/comments`, payload).subscribe({
      next: (res) => {
        this.commentForm.reset();
        this.commentAdd.emit(res);
      },
    });
  }
}
