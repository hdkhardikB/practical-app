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


  /**
   * To set headers in requst.
   */
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  /**
   * To set errors during API call.
   * @param result 
   */
  private formatErrors<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead
      return of(result as T);
    };
  }

  /**
   * To make an HTTP get call.
   * @param path - a url to be called.
   * @param params - parameters to be passed in query string.
   */
  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { headers: this.setHeaders(), search: params }).
      pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));

  }

  /**
   * To make an HTTP Put call.
   * @param path - a url to be called.
   * @param body - put request body to passed.
   */
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));
  }

  /**
   * To make an HTTP Post call.
   * @param path - a url to be called.
   * @param body - post request body to passed.
   */
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    ).
      pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));
  }

  /**
   * To make an HTTP delete call.
   * @param path - a url to be called.
   */
  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`,
      { headers: this.setHeaders() }
    ).
      pipe(map((resp: Response) => resp.json()), catchError(this.formatErrors<any>()));
  }
}
