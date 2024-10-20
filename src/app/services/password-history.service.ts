import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordHistoryService {

  constructor(private httpClient: HttpClient) { }

  listPasswords(page: number) {
    const params = new HttpParams().set('page', page)
    return this.httpClient.get("http://localhost:8080/api/password-history", {params})
  }
}
