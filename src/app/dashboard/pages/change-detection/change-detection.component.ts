import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TitleComponent],
    styles: ``,
    template: `
    <app-title [title]="currectFramework()" />
    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsProperty | json}}</pre>
  `
})
export default class ChangeDetectionComponent {
    currectFramework = computed(
        () => `Change Detection - ${this.frameworkAsSignal().name}`
    )
    frameworkAsSignal = signal({
        name: 'Angular',
        releaseDate: 2016
    });
    frameworkAsProperty = {
        name: 'Angular',
        releaseDate: 2016
    };

    constructor() {
        setTimeout(() => {
            // this.frameworkAsProperty.name = 'React';
            this.frameworkAsSignal.update(value => {
                value.name = 'Astro';

                return {...value};
            });
            console.log('Hecho');
        }, 3000);
    }
}
