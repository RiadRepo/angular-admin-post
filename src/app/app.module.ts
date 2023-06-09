import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Home/form/form.component';
import { TableComponent } from './admin/table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PostComponent } from './Home/post/post.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TreeTableModule } from 'primeng/treetable';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostServiceComponent } from './services/post-service/post-service.component';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    NavbarComponent,
    PostComponent,
    PostServiceComponent,
    PostDetailsComponent,

    // ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    NoopAnimationsModule,
    CardModule,
    FormsModule,
    DialogModule,
    TreeTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    TableModule,
  ],
  providers: [PostServiceComponent, ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
