import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import {  MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxBulletModule,
         DxTemplateModule,
         DxTreeListModule} from 'devextreme-angular';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaSymbol, FlipProp, IconProp, PullProp, RotateProp, SizeProp, Styles, Transform } from '@fortawesome/fontawesome-svg-core';


import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './_components';
import { tablcompComponent } from './tablcomp/tablcomp.component';
import { tabwrapComponent } from './tabwrap/tabwrap.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FavouriteComponent,
    UserComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    tablcompComponent,
    tabwrapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxTreeListModule,
    MatTabsModule,
    MatExpansionModule,
    MatAutocompleteModule,

  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
fakeBackendProvider
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
