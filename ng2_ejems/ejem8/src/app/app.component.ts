import {Component} from 'angular2/core';
import {HeaderComponent} from
   './header.component';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
    directives: [HeaderComponent]
})
export class AppComponent {
  appTitle = "Main title";
}
