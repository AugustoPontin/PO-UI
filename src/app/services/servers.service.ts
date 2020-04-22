import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MonitorService {
  constructor(private http: HttpClient) {}

  public getServers(): Observable<any> {
    return this.http.get(
      "http://localapiserver:3001/rest/api/monitor/v1/allservers"
    );
  }
}
