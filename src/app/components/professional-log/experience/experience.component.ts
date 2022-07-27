import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expData: any;

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.expData = data.experience;
    });
  }

}
