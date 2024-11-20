import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  translations: any = {};

  constructor(private translationService: TranslationService) {
    this.translationService.translations$.subscribe(
      (data) => (this.translations = data)
    );
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
