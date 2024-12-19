import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';

@Component({
    selector: 'app-product-card',
    imports: [],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    // Nueva estructura para un input con signals
    product = input.required<IProduct>();
    // Nueva estructura para un output con signals
    onIncrementQuantity = output<number>();

    incrementQuantity(): void {
        this.onIncrementQuantity.emit(this.product().quantity + 1)
    }

    loginEffect = effect(() => {
        console.log(this.product().name);
    })
}
