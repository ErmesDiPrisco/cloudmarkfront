import { Component } from '@angular/core';
import { Azienda } from '../modules/azienda';
import { AziendaService } from '../services/azienda.service';

@Component({
  selector: 'app-azienda',
  templateUrl: './azienda.component.html',
  styleUrls: ['./azienda.component.css']
})
export class AziendaComponent {
  aziende=this.aziendaService.getAllCompanies()

  constructor(private aziendaService: AziendaService){

  }

}
