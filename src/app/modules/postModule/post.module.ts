import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    PostPageComponent,
    PostsComponent,
    PostComponent,
    CommentsPageComponent,
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
