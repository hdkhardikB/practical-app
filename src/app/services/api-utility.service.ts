import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiUtilityService {
  constructor(
    private http: Http
  ) { }


  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  private formatErrors<T>(result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { headers: this.setHeaders(), search: params }).
      pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));

  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).
      pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`,
      { headers: this.setHeaders() }
    ).
      pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));
  }
}
