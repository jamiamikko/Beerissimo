import { LogoutService } from './services/logout.service';
import { RegisterService } from './services/register.service';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [MediaService, LoginService, RegisterService, LogoutService],
  bootstrap: [AppComponent]
})

export class AppModule { }
