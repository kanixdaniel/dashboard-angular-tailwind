import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response.interface';
import { delay } from 'rxjs';

interface State {
    users: User[];
    loading: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private _http= inject(HttpClient);

    // '#' hace que la propiedad se vuelva privada
    #state = signal<State>({
        loading: true,
        users: []
    });

    // se exponen la variables asi para evitar mutaciones en otro lado
    users = computed(() => this.#state().users);
    loading = computed(() => this.#state().loading);

    constructor() {
        this._http.get<UsersResponse>('https://reqres.in/api/users')
            .pipe(delay(1500))
            .subscribe( res => {
                this.#state.set({
                    loading: false,
                    users: res.data
                });
            })
    }
}
