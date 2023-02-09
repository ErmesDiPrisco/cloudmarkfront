import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AziendaComponent } from './AziendaEnviroments/azienda/azienda.component';
import { AziendaDetailsComponent } from './AziendaEnviroments/azienda-details/azienda-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddAziendaComponent } from './AziendaEnviroments/add-azienda/add-azienda.component';
import { FormsModule } from '@angular/forms';
import { UpdateAziendaComponent } from './AziendaEnviroments/update-azienda/update-azienda.component';
@NgModule({
  declarations: [
    AppComponent,
    AziendaComponent,
    AziendaDetailsComponent,
    HomeComponent,
    AddAziendaComponent,
    UpdateAziendaComponent
    ],
  imports: [
    BrowserModule , HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
