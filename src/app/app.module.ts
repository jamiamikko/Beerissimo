import { UploadService } from './services/upload.service';
import { RegisterService } from './services/register.service';
import { LogoutService } from './services/logout.service';
import { LoginService } from './services/login.service';
import { MediaService } from './services/media.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import {Autosize} from 'angular2-autosize/angular2-autosize';

const routeConfig = [
  {
    path: '',
    component: MainComponent
  },
    {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
   {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: '**',
    component: MainComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    ProfileComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    UploadComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],

  providers: [MediaService, LoginService, RegisterService, LogoutService, UploadService],

  bootstrap: [AppComponent]
})

export class AppModule { }
