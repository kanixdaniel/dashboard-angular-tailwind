import { Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/heavy-loader/heavy-loader-slow.component';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  imports: [HeavyLoaderSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
