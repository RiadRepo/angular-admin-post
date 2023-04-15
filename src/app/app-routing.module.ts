import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './admin/table/table.component';
import { FormComponent } from './Home/form/form.component';
import { PostComponent } from './Home/post/post.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'admin', component: TableComponent },
  { path: 'posts', component: PostComponent },
  { path: 'post/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
