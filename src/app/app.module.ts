import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomeComponent} from './home/home.component';
import {AbsencesManagementComponent} from './absences-management/absences-management.component';
import {AbsenceManagementAddComponent} from './absence-management-add/absence-management-add.component';
import {AbsenceManagementUpdateComponent} from './absence-management-update/absence-management-update.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.route';
import {AbsenceManagementShowComponent} from './absence-management-show/absence-management-show.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LayoutComponent} from './layout/layout.component';
import {UtilisateurGuard} from './guards/utilisateur.guard';
import {PlanningComponent} from './planning/planning.component';
import {ValidationDemandeComponent} from './validation-demande/validation-demande.component';
import {SynthetiqueComponent} from './synthetique/synthetique.component';
import {JoursFeriesComponent} from './jours-feries/jours-feries.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbsencesManagementComponent,
    AbsenceManagementAddComponent,
    AbsenceManagementUpdateComponent,
    AbsenceManagementShowComponent,
    LoginComponent,
    LayoutComponent,
    PlanningComponent,
    ValidationDemandeComponent,
    SynthetiqueComponent,
    JoursFeriesComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UtilisateurGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
