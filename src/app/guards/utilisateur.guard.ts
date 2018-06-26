import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UtilisateurService} from '../services/utilisateur.service';

@Injectable()
export class UtilisateurGuard implements CanActivateChild {

  constructor(private router: Router) {
  }


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    if (UtilisateurService.utilisateur == null) {
      this.router.navigate(['/connexion']);
      return false;
    }
    else {
      return true;
    }

  }
}
