import { Component, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
    selector: 'app-material',
    imports: [
        TitleComponent,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatBottomSheetModule
    ],
    templateUrl: './material.component.html',
    styles: ``
})
export default class MaterialComponent {
    private _bottomSheet = inject(MatBottomSheet);

    openBottomSheet(): void {
        this._bottomSheet.open(OptionsBottomSheetComponent);
    }
}