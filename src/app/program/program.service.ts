import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const url = 'https://www.themealdb.com/api/json/v1/1/';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  constructor(private _http: Http) {}

  getRecipes(): Observable<any> {
    return this._http.get(`${url}latest.php`).map(res => res.json());
  }

  getFactory(url: string, data?): Observable<any> {
    return this._http.get(url, { params: data }).map(res => res.json());
  }

  getRecipe(id: any): Observable<any> {
    return this._http.get(`${url}lookup.php?i=${id}`).map(res => res.json());
  }
}
