import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RefsService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient
      .get("https://fstblogsi.up.railway.app/api/users");
  }
}
