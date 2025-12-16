import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(this.getStoredTheme());

  constructor() {
    effect(() => {
      this.applyTheme(this.isDarkMode());
    });
  }

  toggleDarkMode(): void {
    this.isDarkMode.update(val => !val);
  }

  setDarkMode(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }

  private getStoredTheme(): boolean {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return this.getPreferredTheme();
  }

  private getPreferredTheme(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(isDark: boolean): void {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
