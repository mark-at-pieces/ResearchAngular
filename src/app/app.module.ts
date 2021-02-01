import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// view imports
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { ShopComponent } from './Views/shop/shop.component';

// custom components
import { HeaderComponent } from './Components/header/header.component';


// material shared imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from 'src/app/drag-drop/drag-drop.module';
// import { DropzoneDirective } from 'src/app/drag-drop/Directives/dropzone/dropzone.directive';
// import { DragDropModule } from 'src/app/drag-drop/drag-drop.module';

// add this to the dropZoneModule
// import { DropzoneDirective } from './drag-drop/Directives/dropzone/dropzone.directive';


@NgModule({
    declarations: [
        // DropzoneDirective,
        AppComponent,
        HomeComponent,
        ShopComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        DragDropModule, // might not need this import
    ],
    providers: [],
    bootstrap: [AppComponent],
    // exports: [DropzoneDirective]
})
export class AppModule { }
