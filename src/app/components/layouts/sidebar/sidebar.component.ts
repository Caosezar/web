import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
  ],
})
export class SidebarComponent {
  private authService = inject(AuthService);

  isDarkMode = signal(this.getDarkModeFromStorage());
  showFillerContent = signal(false);
  currentUser = this.authService.currentUser;

  constructor() {
    effect(() => {
      const isDark = this.isDarkMode();
      this.setDarkMode(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  toggleFillerContent(): void {
    this.showFillerContent.update(val => !val);
  }

  toggleDarkMode(): void {
    this.isDarkMode.update(val => !val);
  }

  logout(): void {
    this.authService.logout();
  }

  private getDarkModeFromStorage(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  }

  private setDarkMode(isDark: boolean): void {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
    }
  }
}
