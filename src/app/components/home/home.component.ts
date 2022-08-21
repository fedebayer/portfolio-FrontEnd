import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  person: Person | undefined;
  editPerson: Person | undefined;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
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
}
