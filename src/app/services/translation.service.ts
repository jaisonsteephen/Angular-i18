import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations = new BehaviorSubject<any>({});
  translations$ = this.translations.asObservable();

  currentLang = 'en';

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLang);
  }

  loadTranslations(lang: string) {
    this.http.get(`/locale/${lang}.json`).subscribe((data) => {
      this.translations.next(data);
    });
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.loadTranslations(lang);
  }

  getTranslations(lang: string) {
	  return this.http.get(`/i18n/${lang}.json`);
  }
}

