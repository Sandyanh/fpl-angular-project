import { HomePage } from './pages/home-page/home-page';
import { Routes } from '@angular/router';
import { Client } from './layouts/client/client';
import { CategoryPage } from './pages/category-page/category-page';
import { ProductDetailsPage } from './pages/product-details-page/product-details-page';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { Admin } from './layouts/admin/admin';
import { Categorylist } from './layouts/admin/pages/category-manager/categorylist/categorylist';
import { Categoryadd } from './layouts/admin/pages/category-manager/categoryadd/categoryadd';
import { Categoryedit } from './layouts/admin/pages/category-manager/categoryedit/categoryedit';
import { Productbycategory } from './pages/productbycategory/productbycategory';

export const routes: Routes = [
  {
    path: 'admin',
    component: Admin,
    children: [
      { path: 'category', component: Categorylist },
      { path: 'category/add', component: Categoryadd },
      { path: 'category/edit/:id', component: Categoryedit },
    ],
  },
  {
    path: '',
    component: Client,
    children: [
      { path: '', component: HomePage },
      { path: 'category', component: CategoryPage },
      { path: 'category/:id', component: Productbycategory },
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
