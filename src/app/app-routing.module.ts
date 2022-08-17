import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardService as guard } from './services/guard.service';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'secure',
    component: PortfolioComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin', 'user'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
