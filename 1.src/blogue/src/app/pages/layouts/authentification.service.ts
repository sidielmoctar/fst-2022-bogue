import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "./models/ilogin";
import {ILoginResp} from "./models/ilogin-resp";
import {Observable} from "rxjs";
import {LocalDbService} from "../../services/local-db.service";
import {UtilService} from "../../services/util.service";

@Injectable()
export class AuthentificationService {

  constructor(private httpClient: HttpClient,
              private utilService: UtilService,
              private localDbService: LocalDbService) { }

  logIn(loginObj: ILogin): Observable<ILoginResp> {
    return this.httpClient.post<ILoginResp>("https://fstblogsi.up.railway.app/dj-rest-auth/login/", loginObj);
  }

  logOut() {
    this.localDbService.token = "";
    this.utilService.navigateTo("login");
  }
}
