import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  person: Person | undefined;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getAllPersons();
  }

  public getAllPersons(): void {
    this.personService.getAllPersons().subscribe({
      next: (response: Person[]) => {
        this.person = response[0];
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
