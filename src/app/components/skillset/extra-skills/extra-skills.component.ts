import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-extra-skills',
  templateUrl: './extra-skills.component.html',
  styleUrls: ['./extra-skills.component.css']
})
export class ExtraSkillsComponent implements OnInit {
  extraSkillsData: any;
  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.extraSkillsData = data.extraSkills;
    });
  }

}
