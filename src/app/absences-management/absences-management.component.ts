import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-absences-management',
  templateUrl: './absences-management.component.html',
  styleUrls: ['./absences-management.component.css'],

})
export class AbsencesManagementComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
