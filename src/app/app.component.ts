import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ResearchAngular';
    isShowing: boolean = false;
    scope: any = this;

    public toggleSidenav(): void {
        const { isShowing } = this;
        this.isShowing = !isShowing;
    }

    public callMethods(): void {
        // this.toggleSidenav();
    }
}
