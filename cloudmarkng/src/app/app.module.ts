import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AziendaComponent } from './azienda/azienda.component';

@NgModule({
  declarations: [
    AppComponent,
    AziendaComponent
  ],
  imports: [
    BrowserModule , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
