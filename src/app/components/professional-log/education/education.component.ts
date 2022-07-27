import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  eduData: any;

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.eduData = data.education;
    });
  }

}
