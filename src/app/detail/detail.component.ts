import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../apiService';
import {dataHelper} from '../services/data.helper';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  _data: any;

  constructor(private route: ActivatedRoute, private  _ApiService: ApiService, private _dataHelper: dataHelper, private _appComp: AppComponent) {
    this.route.params.subscribe( params => { console.log(params); this.getSingle(params.id); } );
  }
  ngOnInit() {
  }

  getSingle(e) {
    this._ApiService.getSingle(e).then(response => {
      console.log(response);
        this._data = response;
    });
  }
  editGo () {
    this._dataHelper.setData(this._data);
    this._appComp.addPanel();
  }

  changes(v) {

    switch (v) {
      case 'm' :
        this._ApiService.dataChanged({mailSent: true}, this._data._id).then(x => { });
        break;
      case 'p' :
        this._ApiService.dataChanged({phoned: true}, this._data._id).then(x => { });
        break;
      default:
        break;

    }
  }
}
