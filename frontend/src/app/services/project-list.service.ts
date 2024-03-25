import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../environments/config";
import { Project } from "../models/project";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
    projects!: Project[];
  constructor(private httpClient: HttpClient) {}

  getProjects(){
    return this.httpClient.get<GetResponseProjects>(Config.projectUrl).pipe(map(
        response => response['projects']['rows']
    ));
  }
}

interface GetResponseProjects {
    "projects": {
        "rows": Project[];
    }
}
