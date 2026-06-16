import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { API_URL } from '../tokens/api-url.token';
import { LOGIN_REQUEST } from '../tokens/login-request.token';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #httpClient = inject(HttpClient);
  readonly #apiUrl = inject(API_URL);
  readonly #loginRequest = inject(LOGIN_REQUEST);

  readonly #token = signal<string | null>(localStorage.getItem('jwt_token'));

  readonly isAuthenticated = computed(() => this.#token() !== null);

  public getToken(): string | null {
    return this.#token();
  }

  public refreshToken(): Observable<string> {
    return this.#httpClient.post<string>(
      `${this.#apiUrl}/login`,
      this.#loginRequest
    ).pipe(
      tap(token => this.setToken(token))
    );
  };

  private setToken(token: string): void {
    localStorage.setItem('jwt_token', token);
    this.#token.set(token);
  }
}
