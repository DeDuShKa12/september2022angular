import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';


import {AppComponent} from "./components/app.component";
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/user/users/users.component';
import { UserComponent } from './components/user/user/user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { PostsComponent } from './components/post/posts/posts.component';
import { PostComponent } from './components/post/post/post.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { CommentPageComponent } from './pages/comment-page/comment-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UserPageComponent, children: [
          {path: ':id', component: UserDetailsPageComponent}
        ]
      },
      {path: 'posts', component: PostPageComponent, children: [
          {path: ':postId', component: CommentPageComponent}
        ]}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UserPageComponent,
    PostPageComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserDetailsPageComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
