import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "../environments/config";
import { Project } from "../models/project";
import { sql } from "@vercel/postgres";

@Injectable({
  providedIn: "root",
})
export class ProjectListService {
  projects = sql`SELECT * from Projects`;
  constructor(private httpClient: HttpClient) {}

  getProjects(){
    return this.projects
  }

}
