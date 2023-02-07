import { Component } from '@angular/core';
import { AziendaService } from '../services/azienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-azienda',
  templateUrl: './update-azienda.component.html',
  styleUrls: ['./update-azienda.component.css']
})
export class UpdateAziendaComponent {


  constructor(private aziendaService: AziendaService, private router: Router){

  }

  modificaAzienda(aziende:{id_azienda: string, nome: string, p_iva: string, indirizzo: string, cap: string, iban: string, telefono: string, email: string, pec: string, fax: string}){
    console.log(aziende)
    this.aziendaService.updateCompany(aziende).subscribe((res)=> {console.log(res)})
    // this.router.navigate(['/'])
  }
}
