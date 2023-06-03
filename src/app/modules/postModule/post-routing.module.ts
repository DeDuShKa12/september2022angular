import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {CommentsPageComponent} from "./pages/comments-page/comments-page.component";

const routes: Routes = [
  {path: '', component: PostPageComponent, children: [
      {path: ':id', component: CommentsPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
