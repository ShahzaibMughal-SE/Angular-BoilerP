import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
  ]
})
export class PostsModule { }
