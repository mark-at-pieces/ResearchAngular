import type { AppComponent } from 'src/app/app.component';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    public isShowing = false;
    @Input() scope?: AppComponent;

    public toggleSidenav(): void {
        const { isShowing } = this;
        this.isShowing = !isShowing;
        // call our parent's toggleSizenav function!
        this.scope?.toggleSidenav();
    }

    public callMethods(): void {
        this.toggleSidenav();
    }
}
