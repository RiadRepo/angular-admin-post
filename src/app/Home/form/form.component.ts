import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostServiceComponent } from 'src/app/services/post-service/post-service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Post[]>('http://localhost:3000/post').subscribe((posts) => {
      this.posts = posts.filter((post) => post.approved === true);
      // console.log('working', this.posts);
    });
  }
}
