import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, CheckboxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
