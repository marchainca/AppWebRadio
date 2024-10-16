import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslocoModule, TRANSLOCO_CONFIG, TRANSLOCO_LOADER } from '@ngneat/transloco';
import { translocoConfigFactory, TranslocoHttpLoader } from './transloco.config';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: TRANSLOCO_CONFIG, useValue: translocoConfigFactory() },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    TranslocoModule

  ]
};
