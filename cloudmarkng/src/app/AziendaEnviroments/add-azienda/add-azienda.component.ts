import { Component } from '@angular/core';
import { Azienda } from '../../modules/azienda';
import { AziendaService } from '../../services/azienda.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-azienda',
  templateUrl: './add-azienda.component.html',
  styleUrls: ['./add-azienda.component.css']
})
export class AddAziendaComponent {
  nuovaAzienda!: Azienda[];

  constructor(private aziendaService: AziendaService, private http: HttpClient, private router: Router){
   
  }

  aggiungiAzienda(aziende: {id_azienda: string, nome: string, p_iva: string, indirizzo: string, cap: string, iban: string, telefono: string, email: string, pec: string, fax: string}){
   console.log(aziende)
   this.aziendaService.addCompany(aziende).subscribe((res)=> {console.log(res)})
  //  this.router.navigate(['/'])
  }
}
