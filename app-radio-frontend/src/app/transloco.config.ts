import { TranslocoConfig, translocoConfig, TranslocoLoader, TranslocoModule } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation } from '@ngneat/transloco';
import { HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

// Service que cargará la traducción desde el archivo JSON.
@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return firstValueFrom(this.http.get<Translation>(`/assets/i18n/${lang}.json`));
  }
}

// Configuración de Transloco 
export const translocoConfigFactory = (): TranslocoConfig => translocoConfig({
  availableLangs: ['en', 'es'],
  defaultLang: 'es',
  fallbackLang: 'es',
  reRenderOnLangChange: true,
  prodMode: false,  // Pasar a true en producción
});
