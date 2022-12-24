import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalDbService} from "../../services/local-db.service";
import {UtilService} from "../../services/util.service";
import {IPost} from "./models/ipost";
import {Observable} from "rxjs";

@Injectable()
export class PostsService {

  constructor(private httpClient: HttpClient,
              private utilService: UtilService,
  ) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>("https://fstblogsi.up.railway.app/api/posts/", {
      headers: this.utilService.getHeadersWithToken()
    })
  }

  add(post: IPost) {
    return this.httpClient.post("https://fstblogsi.up.railway.app/api/posts/", post, {
      headers: this.utilService.getHeadersWithToken()
    })
  }

  update(post: IPost) {
    return this.httpClient.put("https://fstblogsi.up.railway.app/api/posts/" + post.id, post, {
      headers: this.utilService.getHeadersWithToken()
    })
  }

  delete(id: number) {
    return this.httpClient.delete("https://fstblogsi.up.railway.app/api/posts/" + id, {
      headers: this.utilService.getHeadersWithToken()
    })
  }
}
