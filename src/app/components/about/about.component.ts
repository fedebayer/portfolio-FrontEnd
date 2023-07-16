import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  person: Person | undefined;
  editPerson: Person | undefined;
  isAdmin: boolean = false;

  constructor(
    private personService: PersonService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getPersons();
    this.isAdmin = this.tokenService.isAdmin();
  }

  public getPersons(): void {
    this.personService.getPersons().subscribe({
      next: (response: Person[]) => {
        this.person = response[0];
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddPerson(addForm: NgForm): void {
    this.personService.addPerson(addForm.value).subscribe(
      (response: Person) => {
        console.log(response);
        this.getPersons();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePerson(Person: Person): void {
    this.personService.updatePerson(Person).subscribe(
      (response: Person) => {
        console.log(response);
        this.getPersons();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(per: Person, mode: String): void {
    const container = document.getElementById('about');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#aboutPlus');
    } else {
      this.editPerson = per;
      button.setAttribute('data-bs-target', '#aboutModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
