
import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },

  {
    path: 'actores',
    loadComponent: () =>
      import('./shared/components/actor/actor.component').then(
        (m) => m.ActorComponent
      ),
  },

  {
    path: 'genero',
    loadComponent: () =>
      import('./shared/components/genero/genero.component').then(
        (m) => m.GeneroComponent
      ),
  },
  {
    path: 'max-duration',
    loadComponent: () =>
      import('./shared/components/max-duration/max-duration.component').then(
        (m) => m.MaxDurationComponent
      ),
  },

  {
    path: 'count',
    loadComponent: () =>
      import('./shared/components/count-plataform/count-plataform.component').then(
        (m) => m.CountPlatformComponent
      ),
  },


  { path: '**', redirectTo: 'principal' },
];

