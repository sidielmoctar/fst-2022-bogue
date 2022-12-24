import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {LocalDbService} from "./local-db.service";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router: Router, private localDbService: LocalDbService) {
  }

  navigateTo(url: string, param?: any) {
    if (!param) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigate([url, param]);
    }
  }

  getHeadersWithToken() {
    const headerSettingsLogin: { [name: string]: string | string[] } = {};
    headerSettingsLogin["Authorization"] = this.localDbService.token;
    return new HttpHeaders(headerSettingsLogin);
  }
}
