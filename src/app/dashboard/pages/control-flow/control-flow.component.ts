import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F'

@Component({
    imports: [],
    templateUrl: './control-flow.component.html',
    styles: ``
})
export default class ControlFlowComponent {
    showContent = signal(false);
    grade = signal<Grade>('A');

    toggleContent() {
        this.showContent.update(value => !value);
    }
}
