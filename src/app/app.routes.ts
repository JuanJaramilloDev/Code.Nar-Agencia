import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Code.Nar | Desarrollo web y soluciones digitales en Colombia',
    loadComponent: () =>
      import('./pages/home/home').then(
        (m) => m.Home
      ),
  },

  {
    path: 'servicios',
    title: 'Servicios de desarrollo web y soluciones digitales | Code.Nar',
    loadComponent: () =>
      import('./pages/servicios/servicios').then(
        (m) => m.Servicios
      ),
  },

  {
    path: 'proyectos',
    title: 'Proyectos de desarrollo web y sistemas | Code.Nar',
    loadComponent: () =>
      import('./pages/proyectos/proyectos').then(
        (m) => m.Proyectos
      ),
  },

  {
    path: 'nosotros',
    title: 'Nuestro equipo de desarrollo web | Code.Nar',
    loadComponent: () =>
      import('./pages/nosotros/nosotros').then(
        (m) => m.Nosotros
      ),
  },

  {
    path: 'contacto',
    title: 'Contacto para tu proyecto digital | Code.Nar',
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
