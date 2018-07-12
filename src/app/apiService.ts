import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';


@Injectable()
export class ApiService {
  private headers = new Headers();
  private url_main = 'https://us-central1-tt-hastam.cloudfunctions.net/';
  private case = this.url_main + 'content/case';  // URL to web api

  public AuthKey = localStorage.getItem('userInfo');

  public token: string;
  public isTokenLoaded: boolean;

  // items: FirebaseListObservable<any>;

  constructor(private http: HttpClient ) {

  }



  newRecord(_data: any): Promise < any > {
    let headers = new HttpHeaders()
    .set('Authorization', this.AuthKey)
    .set('Content-Type', 'application/json')
    .set('X-DreamFactory-API-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d');


    return this.http.post('http://35.204.199.180/api/v2/mongodb/_table/company/', JSON.stringify({ resource: _data }), { headers })
      .toPromise()
      .then(response => { return response })
      .catch(this.handleError);
  }


  dataChanged(_data: any, _id: any): Promise < any > {
    let headers = new HttpHeaders()
      .set('Authorization', this.AuthKey)
      .set('Content-Type', 'application/json')
      .set('X-DreamFactory-API-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d');


    return this.http.patch('http://35.204.199.180/api/v2/mongodb/_table/company/' + _id, JSON.stringify( _data ), { headers })
      .toPromise()
      .then(response => { return response; })
      .catch(this.handleError);
  }

  getSingle(_data: any): Promise < any > {
    let headers = new HttpHeaders()
      .set('Authorization', this.AuthKey)
      .set('Content-Type', 'application/json')
      .set('X-DreamFactory-API-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d');

    const url = 'http://35.204.199.180/api/v2/mongodb/_table/company/' + _data;
    return this.http.get(url, { headers })
      .toPromise()
      .then(response => { return response; })
      .catch(this.handleError);
  }






  allItems(): Promise < any > {
    let headers = new HttpHeaders()
      .set('Authorization', this.AuthKey)
      .set('Content-Type', 'application/json')
      .set('X-DreamFactory-API-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d');

    return this.http.get('http://35.204.199.180/api/v2/mongodb/_table/company', { headers })
      .toPromise()
      .then(response => { return response; })
      .catch(this.handleError);
  }




  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return error.message || error;

  }
}
