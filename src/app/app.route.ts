import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AbsencesManagementComponent} from './absences-management/absences-management.component';
import {
  PATH_ABCENCES,
  PATH_ABCENCES_AJOUT,
  PATH_ABCENCES_DELETE,
  PATH_ABCENCES_SHOW,
  PATH_ABCENCES_UPDATE,
  PATH_HOME
} from './app.constRoute';
import {AbsenceManagementAddComponent} from './absence-management-add/absence-management-add.component';
import {AbsenceManagementDeleteComponent} from './absence-management-delete/absence-management-delete.component';
import {AbsenceManagementUpdateComponent} from './absence-management-update/absence-management-update.component';
import {AbsenceManagementShowComponent} from './absence-management-show/absence-management-show.component';


export const ROUTES:Routes =[

  {path:PATH_HOME,component:HomeComponent},
  {path:PATH_ABCENCES,component:AbsencesManagementComponent,
  children:[
    { path: '', pathMatch: 'full', redirectTo: PATH_ABCENCES},
    {path:PATH_ABCENCES_AJOUT,component:AbsenceManagementAddComponent},
    {path:PATH_ABCENCES_DELETE,component:AbsenceManagementDeleteComponent},
    {path:PATH_ABCENCES_UPDATE,component:AbsenceManagementUpdateComponent},
    {path:PATH_ABCENCES_SHOW,component:AbsenceManagementShowComponent}
  ]}
]

