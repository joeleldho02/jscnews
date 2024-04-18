import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { NewsComponent } from './pages/news/news.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './service/auth-guards/login.guard';
import { CategoryNewsComponent } from './pages/category-news/category-news.component';

const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"news", component: NewsComponent },
  {path:"news/article-slug", component: NewsComponent },
  {path:"main", component: CategoryNewsComponent, data:{category :'main'} },
  {path:"featured", component: CategoryNewsComponent, data:{category :'featured'} },
  {path:"press-release", component: CategoryNewsComponent, data:{category :'press-release'} },
  {path:"live", component: LiveComponent },
  {path:'admin/login', component: LoginComponent, data:{isAdmin:false} }, //, canActivate:[loginGuard]},
  {path:'admin', component: AdminComponent }, //, canActivate: [adminGuard]},
  {path:'admin/add-news', component: AddNewsComponent, data:{isEdit:false} }, //, canActivate:[adminGuard]},
  {path:'admin/edit-news', component: AddNewsComponent, data:{isEdit:true} }, //, canActivate:[adminGuard]},
  {path:'admin/settings', component: SettingsComponent }, //, canActivate:[adminGuard]},
  {path:'about', component: AboutComponent},
  {path:'**', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
