import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './components/features/dashboard/dashboard.component';

/**
 * Rotas da aplicação
 *
 * Estrutura:
 * - Rotas públicas (sem autenticação) → PublicLayoutComponent
 * - Rotas autenticadas (com autenticação) → AuthLayoutComponent
 */
export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      // Rotas públicas serão adicionadas aqui
      // ex: login, sign-up, forgot-password, etc.
    ],
  },
  {
    path: 'app',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
