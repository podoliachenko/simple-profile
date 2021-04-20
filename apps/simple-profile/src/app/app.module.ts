import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  iconsPathFactory,
  TUI_ICONS_PATH, TuiButtonModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AUTH_STATE_TOKEN, AuthState } from './core/store/states/auth.state';
import { environment } from '../environments/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { JWTInterceptor } from './core/interceptors/jwt/jwt.interceptor';
import { HeaderComponent } from './core/header/header/header.component';
import { TuiTagModule } from '@taiga-ui/kit';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    AppRoutingModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: [AUTH_STATE_TOKEN]
    }), TuiButtonModule, TuiTagModule
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/')
    },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
