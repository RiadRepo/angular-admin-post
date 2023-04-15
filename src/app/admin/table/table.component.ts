import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PostServiceComponent } from 'src/app/services/post-service/post-service.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  posts: Post[] = [];

  constructor(
    private postService: PostServiceComponent,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  deletePost(post: Post): void {
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete this post?',
    //   accept: () => {
    this.postService.deletePost(post.id).subscribe(() => {
      this.posts = this.posts.filter((p) => p !== post);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Post deleted successfully',
      });
    });
    //   },
    // });
  }

  approvePost(post: Post): void {
    if (post.id !== undefined) {
      post.approved = true;
      this.postService.updatePost(post).subscribe(() => {
        // this.posts = this.posts.filter((p) => p !== post);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Post approved successfully',
        });
      });
    }
  }
  editPost(post: Post): void {
    this.router.navigate(['/post', post.id], { state: { post: post } });
  }
}
