import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardService } from './guards/guard.service';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  //example of secure route. In this case anyone can see the portfolio. This secure route is the same portfolio but only can acces admin y users.
  {
    path: 'secure',
    component: PortfolioComponent,
    canActivate: [GuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
