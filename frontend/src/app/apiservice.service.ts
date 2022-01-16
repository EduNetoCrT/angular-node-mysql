import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  //conexão do frontend com o backend

  apiUrl = 'http://localhost:3000/users';

  //getAll

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`)
  }

  //create data
   createData():Observable<any>
   {
     return this._http.post(`${this.apiUrl}`,data);
   }
}
function data(arg0: string, data: any): Observable<any> {
  throw new Error('Function not implemented.');
}

