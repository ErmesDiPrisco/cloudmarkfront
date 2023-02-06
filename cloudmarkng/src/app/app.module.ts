import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AziendaComponent } from './azienda/azienda.component';
import { AziendaDetailsComponent } from './azienda-details/azienda-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AziendaComponent,
    AziendaDetailsComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule , HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
