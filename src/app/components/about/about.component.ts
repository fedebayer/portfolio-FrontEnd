import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  person: Person[] | undefined;
  editPerson: Person | undefined;
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(
    private personService: PersonService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getAllPersons();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((role) => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  public getAllPersons(): void {
    this.personService.getAllPersons().subscribe({
      next: (response: Person[]) => {
        this.person = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onUpdatePerson(Person: Person): void {
    this.personService.updatePerson(Person).subscribe(
      (response: Person) => {
        console.log(response);
        this.getAllPersons();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(per: Person): void {
    const container = document.getElementById('about');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    this.editPerson = per;
    button.setAttribute('data-bs-target', '#aboutModal');
    container?.appendChild(button);
    button.click();
  }
}
