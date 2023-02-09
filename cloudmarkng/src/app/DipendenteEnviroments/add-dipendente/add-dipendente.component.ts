import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AziendaService } from 'src/app/services/azienda.service';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-add-dipendente',
  templateUrl: './add-dipendente.component.html',
  styleUrls: ['./add-dipendente.component.css']
})
export class AddDipendenteComponent {
  constructor(private servizioDipendente: DipendenteService, private http: HttpClient, private router: Router) {};

  aggiungiDipendente(dipendente: {id_dipendente: string, nome: string, cognome: string, cf:string, iban: string,
                    id_tipo_contratto: string, email: string, telefono: string, data_nascita: Date}){
    this.servizioDipendente.addEmployee(dipendente).subscribe((res)=> {console.log(res)})
    this.router.navigate(['/'])
  }

  aggiungiLinkAzienda(link: {id_dipendente: string, id_azienda: string, data_inizio: Date, matricola: string, data_fine:Date}){
    this.servizioDipendente.linkToCompany(link).subscribe((res)=> {console.log(res)})
  }

  submit(form1: any, form2: any){
    this.aggiungiDipendente(form1)
    this.aggiungiLinkAzienda(form2)
    this.router.navigate(['/'])
  }
}
