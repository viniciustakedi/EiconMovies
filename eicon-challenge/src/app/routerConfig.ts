// routerConfig.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { ApiComponent } from './screens/api/api.component';

const appRoutes: Routes = [
    {
        path: 'home', pathMatch: 'full', redirectTo: 'home'
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'api',
        component: ApiComponent
    }
];
export default appRoutes;