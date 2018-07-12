import { Component, OnInit } from '@angular/core';
import { ApiService } from './apiService';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm, FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { addPanel } from './dialogs/addPanel.dialog.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns = ['createdBy', 'name', 'phone', 'website', 'country', 'city', 'mailSent', 'phoned', 'assignedTo'];
  dataSource = new MatTableDataSource(null);
  _login = false;
  loading: any;
  _detailPage = false;
  userInfos: FormGroup;
  loginIngos: any;

  constructor(private _ApiService: ApiService,
    public dialog: MatDialog,
    private fb: FormBuilder,
              private router: Router) {
    this.userInfos = fb.group({
      'username': '',
      'pass': ''
    });
    this.userInfos.valueChanges.subscribe(val => {
      this.loginIngos = val;
      console.log(val);
    });

    router.events.subscribe((val) => {
      console.log(val);
      if ( val['url'] === '/' ) {
        this._detailPage = false;
      }
    });

  }

  login() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userName');
    let stTT = this.loginIngos.username + ":" + this.loginIngos.pass;
    localStorage.setItem('userInfo', 'Basic '+btoa(stTT));
    localStorage.setItem('userName', this.loginIngos.username);
    this.dataGet();
  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  /*
    deatilsPane(index) {
      this._details = true;
      this.detailsInfo = this._results.hits[index];
    }
  */


  addPanel() {
    let dialogRef = this.dialog.open(addPanel, {
      width: '1000px',
      height: '650px',
      panelClass: 'cdk-pane-fullscreen-r'
    });
    /*
      dialogRef.componentInstance.data = this._caseClass['contentData'][0]['basicInfo']
    */


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataGet();
      }

    });
  }

  dataGet() {
    this._ApiService.allItems().then(response => {
      this.dataSource = new MatTableDataSource(response.resource);
      console.log(response);
      if (response['resource'] ) {
          this._login = true;
      }
    });
  }

  rowClick (e) {
    this.router.navigate(['detail', e._id]);
    this._detailPage = true;

  }


  ngOnInit() {

    let AuthKey = localStorage.getItem('userInfo');
    console.log(AuthKey);
    if (AuthKey) {
      this.dataGet();
    } else {
      this._login = false;
    }

  }
  changePage(event) {
    console.log(event);
  }

}
