import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AziendaComponent } from './azienda/azienda.component';
import { AziendaDetailsComponent } from './azienda-details/azienda-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddAziendaComponent } from './add-azienda/add-azienda.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AziendaComponent,
    AziendaDetailsComponent,
    HomeComponent,
    AddAziendaComponent
    ],
  imports: [
    BrowserModule , HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
