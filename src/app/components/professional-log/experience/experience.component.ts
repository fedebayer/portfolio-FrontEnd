import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] | undefined;
  defaultImg: String = 'assets/images/icons/freelance-logo.png';
  editExperience: Experience | undefined;
  deleteExperience: Experience | undefined;
  isAdmin: boolean = false;

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getAllExperiences();

    this.isAdmin = this.tokenService.isAdmin();
  }

  public getAllExperiences(): void {
    this.experienceService.getAllExperiences().subscribe({
      next: (response: Experience[]) => {
        this.experiences = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddExperience(addForm: NgForm): void {
    this.experienceService.addExperience(addForm.value).subscribe(
      (response: Experience) => {
        console.log(response);
        this.getAllExperiences();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateExperience(experience: Experience): void {
    this.experienceService.updateExperience(experience).subscribe(
      (response: Experience) => {
        console.log(response);
        this.getAllExperiences();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteExperience(id: number): void {
    this.experienceService.deleteExperienceById(id).subscribe(
      (response: Experience) => {
        console.log(response);
        this.getAllExperiences();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(exp: Experience, mode: String): void {
    const container = document.getElementById('experience');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#expPlus');
    }
    if (mode === 'edit') {
      this.editExperience = exp;
      button.setAttribute('data-bs-target', '#expModal');
    }
    if (mode === 'delete') {
      this.deleteExperience = exp;
      button.setAttribute('data-bs-target', '#deleteExpModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
