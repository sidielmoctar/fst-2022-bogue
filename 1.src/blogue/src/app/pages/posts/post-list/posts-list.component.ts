import {Component, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {IPost} from "../models/ipost";
import {UtilService} from "../../../services/util.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postsService: PostsService,
              public utilService: UtilService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  delete(id: number) {
    this.postsService.delete(id).subscribe(() => {
      this.getPosts();
    })
  }
}
