import { Injectable, signal } from '@angular/core';
import { User, AuthResponse } from '../models';

/**
 * Serviço de autenticação
 *
 * Responsabilidades:
 * - Gerenciar estado de autenticação
 * - Armazenar token de acesso
 * - Fornecer métodos para login e logout
 * - Gerenciar dados do usuário autenticado
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  // Signals para estado reativo
  isAuthenticated = signal(false);
  currentUser = signal<User | null>(null);
  isLoading = signal(false);

  constructor() {
    this.loadAuthStateFromStorage();
  }

  /**
   * Carrega estado de autenticação do localStorage
   */
  private loadAuthStateFromStorage(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const userStr = localStorage.getItem(this.USER_KEY);

    if (token && userStr) {
      try {
        const user = JSON.parse(userStr) as User;
        this.currentUser.set(user);
        this.isAuthenticated.set(true);
      } catch (error) {
        console.error('Erro ao carregar estado de autenticação:', error);
        this.clearAuth();
      }
    }
  }

  /**
   * Realiza login do usuário
   * TODO: Implementar chamada HTTP ao backend
   */
  login(email: string, password: string): Promise<void> {
    this.isLoading.set(true);
    // Implementação futura
    return Promise.resolve();
  }

  /**
   * Realiza logout do usuário
   */
  logout(): void {
    this.clearAuth();
  }

  /**
   * Obtém o token de acesso armazenado
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Define o estado de autenticação após sucesso de login
   */
  setAuthState(response: AuthResponse): void {
    localStorage.setItem(this.TOKEN_KEY, response.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
    this.currentUser.set(response.user as User);
    this.isAuthenticated.set(true);
    this.isLoading.set(false);
  }

  /**
   * Limpa todos os dados de autenticação
   */
  private clearAuth(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.isLoading.set(false);
  }
}
