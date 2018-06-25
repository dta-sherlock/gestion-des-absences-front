import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UTILISATEUR} from '../services/utilisateur.service';

@Injectable()
export class UtilisateurGuard implements CanActivateChild {

  constructor(private router: Router) {
  }


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (UTILISATEUR.grade.toString() === '') {
      this.router.navigate(['/connexion']);

    }
    else {
      return true;
    }

  }
}
