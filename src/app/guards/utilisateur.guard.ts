import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UTILISATEUR} from '../app.constante';

@Injectable()
export class UtilisateurGuard implements CanActivateChild {

  constructor(private router: Router) {
  }


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (UTILISATEUR.role == '') {
      this.router.navigate(['/connexion']);
    }
    else {
      return true;
    }

  }
}
