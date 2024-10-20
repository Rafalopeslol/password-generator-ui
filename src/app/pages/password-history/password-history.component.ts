import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordHistoryService } from '../../services/password-history.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-password-history',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  providers: [
    PasswordHistoryService
  ],
  templateUrl: './password-history.component.html',
  styleUrl: './password-history.component.scss'
})
export class PasswordHistoryComponent {
  currentPage: number = 1
  passwords: any[] = []
  passwordsCount: number = 0

  constructor(private router: Router, private passwordHistoryService: PasswordHistoryService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.listPasswords(this.currentPage)
  }

  navigateToGenerate() {
    this.router.navigate(["generator"]);
  }

  listPasswords(page: number) {
    this.passwordHistoryService.listPasswords(page - 1).subscribe({
      next: (response: any) => {
        this.passwords = response.passwords
        this.passwordsCount = response.count
      },
      error: (err) => this.toastrService.error(err.error.message)
    });
  }

  OnPageChange(page: number) {
    this.currentPage = page
    this.listPasswords(page)
  }
}
