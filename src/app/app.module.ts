import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadableModule, matcher } from 'ngx-loadable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadableModule.forRoot({
      moduleConfigs: [{ name: 'login-modal', loadChildren: () => import('./login-modal/login-modal.module').then(m => m.LoginModalModule), matcher }]
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
