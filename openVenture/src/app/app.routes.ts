import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NewGameMenuComponent } from './start/new-game-menu/new-game-menu.component';

export const routes: Routes = [
    {path: 'start-menu', component: StartComponent },
    { path: 'new-venture', component: NewGameMenuComponent }
];
