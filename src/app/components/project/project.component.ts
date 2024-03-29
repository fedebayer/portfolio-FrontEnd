import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { Project } from 'src/app/model/project';
import { PersonService } from 'src/app/services/person.service';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] | undefined;
  defaultImg: String = 'assets/images/img/project-img.png';
  editProject: Project | undefined;
  deleteProject: Project | undefined;
  person: Person | undefined;
  isAdmin: boolean = false;

  constructor(
    private projectService: ProjectService,
    private personService: PersonService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getProjects();

    this.isAdmin = this.tokenService.isAdmin();
  }

  public getProjects(): void {
    this.personService.getPersons().subscribe({
      next: (response: Person[]) => {
        this.person = response[0];
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
    this.projectService.getProjects().subscribe({
      next: (response: Project[]) => {
        this.projects = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddProject(addForm: NgForm): void {
    this.projectService.addProject(addForm.value).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProjects();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateProject(Project: Project): void {
    this.projectService.updateProject(Project).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProject(id: number): void {
    this.projectService.deleteProjectById(id).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(project: Project, mode: String): void {
    const container = document.getElementById('projects');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#projectPlus');
    }
    if (mode === 'edit') {
      this.editProject = project;
      button.setAttribute('data-bs-target', '#projectModal');
    }
    if (mode === 'delete') {
      this.deleteProject = project;
      button.setAttribute('data-bs-target', '#deleteProjectModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
