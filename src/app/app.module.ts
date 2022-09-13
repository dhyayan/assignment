import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { XComponent } from './dynamic/x/x.component';
import { YComponent } from './dynamic/x/y/y.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { CommunicationComponent } from './communication/communication.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicComponent,
    XComponent,
    YComponent,
    FormComponent,
    HeaderComponent,
    CommunicationComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
