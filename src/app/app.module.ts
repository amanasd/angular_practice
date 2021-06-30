import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HeaderComponent } from './header/header.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';

const appRoutes:Routes = [
  { path : '',component : LoginComponent},
  { path : 'home',component : HomeComponent},
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/detail/:id', component: TutorialDetailsComponent },
  { path: 'tutorials/add', component: AddTutorialComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    EventbindComponent,
    TwoWayBindComponent,
    DatePickerComponent,
    LoginComponent,
    HomeComponent,
    TutorialsListComponent,
    AddTutorialComponent,
    TutorialDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
