import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavComponent } from './fav/fav.component';
import { DrawComponent } from './draw/draw.component';


export const routes: Routes = [
    {path:'', redirectTo: '/home',pathMatch:'full'},
    { path: 'home', component: HomeComponent },
  { path: 'fav', component: FavComponent },
  { path: 'draw', component: DrawComponent },
];
