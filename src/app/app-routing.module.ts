import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Views/home/home.component';
import { ShopComponent } from 'src/app/Views/shop/shop.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent },


    // default redirect to our home view!
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
