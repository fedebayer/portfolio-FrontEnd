import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  realRol!: String;

  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach((role) => {
      if (role === 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
    if (
      !this.tokenService.getToken() ||
      expectedRol.indexOf(this.realRol) === -1
    ) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
