import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';


import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {AppComponent} from "./components/app.component";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
