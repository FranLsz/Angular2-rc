import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: BASE_URL + '/templates/app.template.html'
})

export class AppComponent {
    public unaVar: string;

    constructor() {
        this.unaVar = "yep";
    }
}