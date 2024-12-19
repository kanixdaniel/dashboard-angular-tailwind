import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';

@Component({
    selector: 'app-input-output',
    imports: [ProductCardComponent],
    templateUrl: './input-output.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent {

}
