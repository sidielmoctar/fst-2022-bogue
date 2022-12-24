import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './post-list/posts-list.component';
import {SharedModule} from "../../common/shared/shared.module";
import {PostsService} from "./posts.service";
import { PostFormComponent } from './post-form/post-form.component';


@NgModule({
  declarations: [
    PostsListComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
