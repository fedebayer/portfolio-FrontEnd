import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: any;

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit(): void {
    this.homeData = {
      name: '-',
      subtitle: '-',
      heroImg: 'assets/images/img/hero-image.jpg'
    };
    this.portfolioData.getData().subscribe(data => {
      this.homeData = data.home;
    });
  }

}
