import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response.interface';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
    imports: [TitleComponent],
    template: `
        <app-title [title]="titleLabel()" />

        @if (user()) {
            <section>
                <img [alt]="user()!.first_name" [srcset]="user()!.avatar">
                <div>
                    <h3>{{user()!.first_name}} {{user()!.last_name}}</h3>
                    <p>{{user()!.email}}</p>
                </div>
            </section>
        } @else {
            <p>Cargando...</p>
        }
    `
})
export default class UserComponent {
    private _route = inject(ActivatedRoute);
    private _usersService = inject(UsersService);
    // user = signal<User | undefined>(undefined);
    user = toSignal(
        this._route.params.pipe(
            switchMap(({id}) => this._usersService.getUserById(id))
        )
    );
    titleLabel = computed(() => {
        if(this.user()) {
            return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
        }
        
        return 'Información del usario';
    })

    /* constructor() {
        this._route.params.subscribe(params => {
            console.log(params)
        })
    } */
}
