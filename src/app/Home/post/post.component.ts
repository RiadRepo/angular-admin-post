import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostServiceComponent } from 'src/app/services/post-service/post-service.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  value: string = '';

  // displayModal: boolean = false;

  // showDialog() {
  //   this.displayModal = true;
  // }

  // hideDialog() {
  //   this.displayModal = false;
  // }

  // save() {
  //   // Perform save operation
  //   this.hideDialog();
  // }

  myForm: FormGroup;

  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostServiceComponent
  ) {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      // author: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      const newPost = { ...this.myForm.value, approved: false }; // Add 'approved' field with a value of false
      this.postService.createPost(newPost).subscribe((post) => {
        alert('Post submitted successfully and awaits approval!');
        this.myForm.reset();
        this.submitted = false;
      });
    }
  }
}
