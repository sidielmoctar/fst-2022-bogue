import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from "./post-list/posts-list.component";
import {PostFormComponent} from "./post-form/post-form.component";

const routes: Routes = [
  {
    path : "",
    component: PostsListComponent
  },
  {
    path : "PostForm",
    component: PostFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
