import { Component, signal } from '@angular/core';

@Component({
    imports: [],
    templateUrl: './control-flow.component.html',
    styles: ``
})
export default class ControlFlowComponent {
    showContent = signal(false);

    toggleContent() {
        this.showContent.update(value => !value);
    }
}
