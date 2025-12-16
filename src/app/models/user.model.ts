/**
 * Modelo de usuário autenticado
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role?: string;
  createdAt?: Date;
}
