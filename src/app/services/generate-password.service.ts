import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratePasswordService {

  constructor(private httpClient: HttpClient) { }

  generatePassword(useUpperCaseLetters: boolean, useLowerCaseLetters: boolean, useNumbers: boolean, useSpecialCharacters: boolean, passwordLength: number) {
    return this.httpClient.post("http://localhost:8080/api/generate-password", {useUpperCaseLetters, useLowerCaseLetters, useNumbers, useSpecialCharacters, passwordLength})
  }
}
