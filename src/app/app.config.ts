import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withViewTransitions({
                skipInitialTransition: true,
                /* onViewTransitionCreated(transitionInfo) {
                    console.log({transitionInfo});
                } */
            }),
        ),
        importProvidersFrom(
            // Aqui van todos los modulos que se necesiten importar de forma global
        ),
        provideHttpClient()
    ]
};
