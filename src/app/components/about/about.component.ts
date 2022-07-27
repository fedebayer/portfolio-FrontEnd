import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData: any;

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.aboutData = {
      text: '-',
      profileImg: 'assets/images/img/profilePhoto.png'
    };
    this.portfolioData.getData().subscribe(data => {
      this.aboutData = data.about;
    });
  }

}
