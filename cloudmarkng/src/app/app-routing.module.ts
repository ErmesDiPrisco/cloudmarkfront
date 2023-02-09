import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AziendaDetailsComponent } from './AziendaEnviroments/azienda-details/azienda-details.component';
import { AziendaComponent } from './AziendaEnviroments/azienda/azienda.component';
import { HomeComponent } from './home/home.component';
import { AddAziendaComponent } from './AziendaEnviroments/add-azienda/add-azienda.component';
import { UpdateAziendaComponent } from './AziendaEnviroments/update-azienda/update-azienda.component';
import { AddDipendenteComponent } from './DipendenteEnviroments/add-dipendente/add-dipendente.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aziendaDetails/:id', component: AziendaDetailsComponent},
  {path: 'aziendaUpdate/:id', component: UpdateAziendaComponent},
  {path: 'addAzienda', component: AddAziendaComponent},
  {path: 'addDipendente', component: AddDipendenteComponent},
  {path: 'azienda', component: AziendaComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
