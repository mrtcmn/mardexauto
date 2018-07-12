import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class dataHelper {
  data: EventEmitter<any> = new EventEmitter();
  _data: any;


  setData(v: any) {
    this.data.emit(v);
    this._data = v;
  }




}
