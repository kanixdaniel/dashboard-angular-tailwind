import { Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/heavy-loader/heavy-loader-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [HeavyLoaderFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
