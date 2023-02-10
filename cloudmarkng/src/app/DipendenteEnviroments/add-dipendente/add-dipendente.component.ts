import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Dipendente } from 'src/app/modules/dipendente';
import { AziendaService } from 'src/app/services/azienda.service';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-add-dipendente',
  templateUrl: './add-dipendente.component.html',
  styleUrls: ['./add-dipendente.component.css']
})
export class AddDipendenteComponent {
  dipendente!:Dipendente;
  constructor(private servizioDipendente: DipendenteService, private http: HttpClient, private router: Router) {};

  aggiungiDipendente(dipendente: {id_dipendente: string, nome: string, cognome: string, cf:string, iban: string,
                    id_tipo_contratto: string, email: string, telefono: string, data_nascita: Date}){
    this.servizioDipendente.addEmployee(dipendente).subscribe((res)=> {console.log(res)})

  }

  aggiungiLinkAzienda(link: {id_dipendente: string, id_azienda: string, data_inizio: Date, matricola: string, data_fine:Date}, id: string){
    link.id_dipendente = id
    this.servizioDipendente.linkToCompany(link).subscribe((res)=> {console.log(res)})
  }

  submit(form1: FormGroup, form2: FormGroup){
    this.aggiungiDipendente(form1.value)
    this.aggiungiLinkAzienda(form2.value, form1.controls['id_dipendente'].value)
    console.log(form1.value)
    console.log(form2.value, form1.controls['id_dipendente'].value)
    this.router.navigate(['/'])
  }
}
