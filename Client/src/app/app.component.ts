import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/services/api.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule,AuthModule,ReactiveFormsModule,BooksModule,UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Client';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userStatus.next(status);
  }
}
