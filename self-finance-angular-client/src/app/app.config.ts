import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { API_URL } from './core/tokens/api-url.token';
import { environment } from '../environments/environment.development';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth/auth-interceptor';
import { LOGIN_REQUEST } from './core/tokens/login-request.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),

    { provide: API_URL, useValue: environment.apiUrl },
    { provide: LOGIN_REQUEST, useValue: environment.loginRequest },
  ],
};
