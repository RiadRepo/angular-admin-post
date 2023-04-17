import { Component, Input } from '@angular/core';
import { Post } from '../models/Post';
import { PostServiceComponent } from '../services/post-service/post-service.component';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent {
  @Input() post!: Post;

  constructor(
    private postService: PostServiceComponent,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const id = Number(idString); // or const id = parseInt(idString);
    // console.log(typeof id);
    this.getPost(id);
  }

  getPost(id: number): void {
    this.postService.getPost(id).subscribe((posts) => {
      this.post = posts;
      console.log(posts);
    });
  }
  savePost(post: Post): void {
    console.log(post);
    this.postService.updatePost(this.post).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}
