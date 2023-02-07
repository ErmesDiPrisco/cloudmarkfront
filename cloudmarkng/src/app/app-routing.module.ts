import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AziendaDetailsComponent } from './azienda-details/azienda-details.component';
import { AziendaComponent } from './azienda/azienda.component';
import { HomeComponent } from './home/home.component';
import { AddAziendaComponent } from './add-azienda/add-azienda.component';
import { UpdateAziendaComponent } from './update-azienda/update-azienda.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aziendaDetails/:id', component: AziendaDetailsComponent},
  {path: 'aziendaUpdate/:id', component: UpdateAziendaComponent},
  {path: 'addAzienda', component: AddAziendaComponent},
  {path: 'azienda', component: AziendaComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
