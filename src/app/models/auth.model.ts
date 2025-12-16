/**
 * Modelo para resposta de autenticação
 */
export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
  refreshToken?: string;
  expiresIn?: number;
}
