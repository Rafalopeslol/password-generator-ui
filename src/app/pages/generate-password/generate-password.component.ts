import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneratePasswordService } from '../../services/generate-password.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    GeneratePasswordService
  ],
  templateUrl: './generate-password.component.html',
  styleUrl: './generate-password.component.scss'
})
export class GeneratePasswordComponent {
  useUpperCaseLetters: boolean = false;
  useLowerCaseLetters: boolean = false;
  useNumbers: boolean = false;
  useSpecialCharacters: boolean = false;
  passwordLength: number = 0;
  password: string = '';

  constructor(private router: Router, private generatePasswordService: GeneratePasswordService, private toastrService: ToastrService) {}

  navigateToHistory() {
    this.router.navigate(["history"]);
  }

  copyPassword() {
    navigator.clipboard.writeText(this.password)
  }

  generatePassword() {
    this.generatePasswordService.generatePassword(this.useUpperCaseLetters, this.useLowerCaseLetters, this.useNumbers, this.useSpecialCharacters, this.passwordLength).subscribe({
      next: (response: any) => this.password = response.password,
      error: (err) => this.toastrService.error(err.error.message)
    });
  }
}
