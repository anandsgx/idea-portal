import { Routes } from '@angular/router';
import { RegistrationComponent } from './featured/components/registration/registration.component';

export const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent }
];
