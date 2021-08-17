import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsRoutingModule } from './manageposts/posts-routing.module';
import { UserComponent } from './users/user/user.component';
import { UsersRoutingModule } from './users/users-routing.module';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'',  loadChildren: () => import('../app/users/users-routing.module').then(m => m.UsersRoutingModule)},
  {path:'**',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,PostsRoutingModule]
})
export class AppRoutingModule { }
