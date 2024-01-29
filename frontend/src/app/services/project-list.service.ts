import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../environments/config";
import { Project } from "../models/project";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
  projectsUrl = Config.projectUrl;
  constructor(private httpClient: HttpClient) {}

  getProjects(){
    return this.httpClient.get<Project[]>(this.projectsUrl)
  }

}
