import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewBooksComponent } from './view-books/view-books.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { ReturnBookComponent } from './return-book/return-book.component';



@NgModule({
  declarations: [
    ViewBooksComponent,
    MaintenanceComponent,
    BookStoreComponent,
    ReturnBookComponent
  ],
  imports: [
    CommonModule,SharedModule,ReactiveFormsModule
  ]
})
export class BooksModule { }
