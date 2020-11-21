import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vader';
  constructor(public translate: TranslateService) {
    translate.addLangs(['english', 'french']);
    translate.setDefaultLang('english');
    const browserLang = translate.getBrowserLang();
    translate.use(
      browserLang.match(/english|french/) ? browserLang : 'english'
    );
  }
}
