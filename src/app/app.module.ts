import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import {AbsencesManagementComponent} from './absences-management/absences-management.component';
import {AbsenceManagementAddComponent} from './absence-management-add/absence-management-add.component';
import {AbsenceManagementUpdateComponent} from './absence-management-update/absence-management-update.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.route';
import {AbsenceManagementShowComponent} from './absence-management-show/absence-management-show.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LayoutComponent} from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbsencesManagementComponent,
    AbsenceManagementAddComponent,
    AbsenceManagementUpdateComponent,
    AbsenceManagementShowComponent,
    LoginComponent,
    LayoutComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
