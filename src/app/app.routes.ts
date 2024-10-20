import { Routes } from '@angular/router';
import { GeneratePasswordComponent } from './pages/generate-password/generate-password.component';
import { PasswordHistoryComponent } from './pages/password-history/password-history.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'generator',
        pathMatch: 'full'
    },
    {
        path: 'generator',
        component: GeneratePasswordComponent
    },
    {
        path: 'history',
        component: PasswordHistoryComponent
    }
];
