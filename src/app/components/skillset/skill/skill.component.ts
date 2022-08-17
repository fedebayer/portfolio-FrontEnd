import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Language } from 'src/app/model/language';
import { Skill } from 'src/app/model/skill';
import { SoftSkill } from 'src/app/model/softSkill';
import { LanguageService } from 'src/app/services/language.service';
import { SkillService } from 'src/app/services/skill.service';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills: Skill[] | undefined;
  editSkill: Skill | undefined;
  deleteSkill: Skill | undefined;
  softSkills: SoftSkill[] | undefined;
  editSoftSkill: SoftSkill | undefined;
  deleteSoftSkill: SoftSkill | undefined;
  languages: Language[] | undefined;
  editLanguage: Language | undefined;
  deleteLanguage: Language | undefined;
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(
    private skillService: SkillService,
    private softSkillService: SoftSkillService,
    private languageService: LanguageService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getAllSkills();
    this.getAllSoftSkills();
    this.getAllLanguages();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((role) => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  public getAllSkills(): void {
    this.skillService.getAllSkills().subscribe({
      next: (response: Skill[]) => {
        this.skills = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddSkill(addForm: NgForm): void {
    this.skillService.addSkill(addForm.value).subscribe(
      (response: Skill) => {
        console.log(response);
        this.getAllSkills();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateSkill(Skill: Skill): void {
    this.skillService.updateSkill(Skill).subscribe(
      (response: Skill) => {
        console.log(response);
        this.getAllSkills();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSkill(id: number): void {
    this.skillService.deleteSkillById(id).subscribe(
      (response: Skill) => {
        console.log(response);
        this.getAllSkills();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(skill: Skill, mode: String): void {
    const container = document.getElementById('skillset');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#skillPlus');
    }
    if (mode === 'edit') {
      this.editSkill = skill;
      button.setAttribute('data-bs-target', '#skillModal');
    }
    if (mode === 'delete') {
      this.deleteSkill = skill;
      button.setAttribute('data-bs-target', '#deleteSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getAllLanguages(): void {
    this.languageService.getAllLanguages().subscribe({
      next: (response: Language[]) => {
        this.languages = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddLanguage(addForm: NgForm): void {
    this.languageService.addLanguage(addForm.value).subscribe(
      (response: Language) => {
        console.log(response);
        this.getAllLanguages();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateLanguage(language: Language): void {
    this.languageService.updateLanguage(language).subscribe(
      (response: Language) => {
        console.log(response);
        this.getAllLanguages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteLanguage(id: number): void {
    this.languageService.deleteLanguageById(id).subscribe(
      (response: Language) => {
        console.log(response);
        this.getAllLanguages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModalLanguage(lang: Language, mode: String): void {
    const container = document.getElementById('skillset');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#languagePlus');
    }
    if (mode === 'edit') {
      this.editLanguage = lang;
      button.setAttribute('data-bs-target', '#languageModal');
    }
    if (mode === 'delete') {
      this.deleteLanguage = lang;
      button.setAttribute('data-bs-target', '#deleteLanguageModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getAllSoftSkills(): void {
    this.softSkillService.getAllSoftSkills().subscribe({
      next: (response: SoftSkill[]) => {
        this.softSkills = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddSoftSkill(addForm: NgForm): void {
    this.softSkillService.addSoftSkill(addForm.value).subscribe(
      (response: SoftSkill) => {
        console.log(response);
        this.getAllSoftSkills();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateSoftSkill(softSkill: SoftSkill): void {
    this.softSkillService.updateSoftSkill(softSkill).subscribe(
      (response: SoftSkill) => {
        console.log(response);
        this.getAllSoftSkills();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSoftSkill(id: number): void {
    this.softSkillService.deleteSoftSkillById(id).subscribe(
      (response: SoftSkill) => {
        console.log(response);
        this.getAllSoftSkills();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModalSoft(soft: SoftSkill, mode: String): void {
    const container = document.getElementById('skillset');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#softSkillPlus');
    }
    if (mode === 'edit') {
      this.editSoftSkill = soft;
      button.setAttribute('data-bs-target', '#softSkillModal');
    }
    if (mode === 'delete') {
      this.deleteSoftSkill = soft;
      button.setAttribute('data-bs-target', '#deleteSoftSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
