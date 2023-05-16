import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { SwapiComponent } from './swapi/swapi.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blog/:id', component: BlogPageComponent },
  { path: 'people', component: SwapiComponent },
  { path: 'person/:id', component: PersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }