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
import { authGuard } from './pages/auth/guards/auth-guard';
import { Productlist } from './layouts/admin/pages/product-manager/productlist/productlist';
import { Productadd } from './layouts/admin/pages/product-manager/productadd/productadd';
import { Productedit } from './layouts/admin/pages/product-manager/productedit/productedit';
import { Searchproduct } from './layouts/admin/pages/searchproduct/searchproduct';

export const routes: Routes = [
  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard],
    children: [
      { path: 'category', component: Categorylist },
      { path: 'category/add', component: Categoryadd },
      { path: 'category/edit/:id', component: Categoryedit },
      { path: 'product', component: Productlist },
      { path: 'product/search', component: Searchproduct },
      { path: 'product/add', component: Productadd },
      { path: 'product/edit/:id', component: Productedit },
    ],
  },
  {
    path: '',
    component: Client,
    children: [
      { path: '', component: HomePage },
      { path: 'category', component: CategoryPage },
      { path: 'category/:id', component: Productbycategory },
      { path: 'product/:id', component: ProductDetailsPage },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];
