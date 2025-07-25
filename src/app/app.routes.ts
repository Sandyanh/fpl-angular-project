import { HomePage } from './pages/home-page/home-page';
import { Routes } from '@angular/router';
import { Client } from './layouts/client/client';
import { CategoryPage } from './pages/category-page/category-page';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: Client,
    children: [
      { path: '', component: HomePage },
      { path: 'category', component: CategoryPage },
      { path: 'detail', component: ProductDetailsPage },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];
