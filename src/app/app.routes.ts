import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'CodeNari | Desarrollo Web y Soluciones Digitales',
    loadComponent: () =>
      import('./pages/home/home').then(
        (m) => m.Home
      ),
  },

  {
    path: 'servicios',
    title: 'Servicios de Desarrollo Web | CodeNari',
    loadComponent: () =>
      import('./pages/servicios/servicios').then(
        (m) => m.Servicios
      ),
  },

  {
    path: 'proyectos',
    title: 'Proyectos y Casos de Éxito | CodeNari',
    loadComponent: () =>
      import('./pages/proyectos/proyectos').then(
        (m) => m.Proyectos
      ),
  },

  {
    path: 'nosotros',
    title: 'Nosotros | CodeNari',
    loadComponent: () =>
      import('./pages/nosotros/nosotros').then(
        (m) => m.Nosotros
      ),
  },

  {
    path: 'contacto',
    title: 'Contacto | CodeNari',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(
        (m) => m.Contacto
      ),
  },

  {
    path: '**',
    redirectTo: '',
  },
];