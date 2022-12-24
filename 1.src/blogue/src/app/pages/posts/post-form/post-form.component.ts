import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostsService} from "../posts.service";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../models/ipost";
import {UtilService} from "../../../services/util.service";
import {RefsService} from "../../../services/refs.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  currentPost = <IPost>{};
  users: any = [];

  constructor(private postsService: PostsService,
              private activatedRoute: ActivatedRoute,
              private refsService: RefsService,
              private utilService: UtilService
  ) {
  }

  ngOnInit(): void {
    this.currentPost = <IPost>this.activatedRoute.snapshot.params;
    this.refsService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  save() {
    if (this.currentPost.id) {
      this.postsService.update(this.currentPost).subscribe(data => {
        this.utilService.navigateTo('posts');
      })
    } else {
      this.postsService.add(this.currentPost).subscribe(data => {
        this.utilService.navigateTo('posts');
      })
    }
  }

}
