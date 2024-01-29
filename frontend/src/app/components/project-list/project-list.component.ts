import { Component, Inject, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectListService } from 'src/app/services/project-list.service';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    projects!: Project[];

    constructor(private projectListService: ProjectListService, @Inject(DOCUMENT) private document: Document){}

    ngOnInit(): void {
        this.projectListService.getProjects().subscribe(data => {
            this.projects = data;
        })
    }

    openProjectDescription(projectIndex: number){
        var projectContent = document.getElementById(`project${projectIndex}`)!;
        projectContent.setAttribute("style", "transform: translate(-53px); visibility: visible")

        var backdrop = document.getElementById(`background${projectIndex}`)!;
        backdrop.setAttribute("style", "opacity: 1; display: block; visibility: visible")
        backdrop.addEventListener("click", () => {
            projectContent.removeAttribute("style");
            backdrop.removeAttribute("style");
        })
    }
}
