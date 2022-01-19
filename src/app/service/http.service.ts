import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pluck, Subject, switchMap, take, tap} from "rxjs";
import {IApiData} from "../models/apiData.interface";
import {environment} from "../../environments/environment";
import {IPhoto, IPhotos} from "../models/photos.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data$ = new Subject<IPhoto[]>()

  constructor(private http: HttpClient) {
    this.getData().pipe(take(1)).subscribe();
  }

  onPageChange(page: number) {
    this.getData(page).pipe(take(1)).subscribe();
  }

  private getData(page: number = 1): Observable<IPhoto[]> {
    return this.http.get<IPhotos>(environment.apiUrl, {
      params: {
        api_key: environment.apiKey,
        page
      }
    }).pipe(pluck('photos'), tap((result) => this.data$.next(result)))
  }
}
