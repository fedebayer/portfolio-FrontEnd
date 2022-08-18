import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: Education[] | undefined;
  defaultImg: String = 'assets/images/icons/education-logo.jpg';
  editEducation: Education | undefined;
  deleteEducation: Education | undefined;
  isAdmin: boolean = false;

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getAllEducations();

    this.isAdmin = this.tokenService.isAdmin();
  }

  public getAllEducations(): void {
    this.educationService.getAllEducations().subscribe({
      next: (response: Education[]) => {
        this.educations = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddEducation(addForm: NgForm): void {
    this.educationService.addEducation(addForm.value).subscribe(
      (response: Education) => {
        console.log(response);
        this.getAllEducations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEducation(Education: Education): void {
    this.educationService.updateEducation(Education).subscribe(
      (response: Education) => {
        console.log(response);
        this.getAllEducations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEducation(id: number): void {
    this.educationService.deleteEducationById(id).subscribe(
      (response: Education) => {
        console.log(response);
        this.getAllEducations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(edu: Education, mode: String): void {
    const container = document.getElementById('education');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#eduPlus');
    }
    if (mode === 'edit') {
      this.editEducation = edu;
      button.setAttribute('data-bs-target', '#eduModal');
    }
    if (mode === 'delete') {
      this.deleteEducation = edu;
      button.setAttribute('data-bs-target', '#deleteEduModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
