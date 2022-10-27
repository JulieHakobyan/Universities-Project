import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from '../helpers/main.helper';

@Injectable({providedIn: 'root'})
export class HttpService {

    constructor(
        private _http: HttpClient,
    ) {

    }

    /**
     * Get request for retrieve universities data
     * @param params
     */
    requestUniversities(params?: Record<string, string>): Observable<unknown> {
        return this._http.get(MAIN_URL, {params});
    }
}
