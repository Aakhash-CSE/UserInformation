import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularMaterialModules } from './Modules/angularMaterialModules';
import { InitialRoutingComponents, InitialRouting } from './Modules/initialRouting';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UsersComponent } from './Components/Pages/UserInformation/users/users.component';
import { PostsComponent } from './Components/Pages/Posts/posts/posts.component';
const config: SocketIoConfig = { url: 'http://64.202.184.96:5555', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    InitialRoutingComponents,
    UsersComponent,
    PostsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InitialRouting,
    AngularMaterialModules,
    HttpClientModule,
     SocketIoModule.forRoot(config),
    
  ],
  exports: [],
  providers: [],
 
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
