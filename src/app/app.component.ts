import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TheComplateGuideProject';
  loadedFeature = 'Recipes';

  onNavigate(e) {
    this.loadedFeature = e;
  }
}
