import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Dipendente } from 'src/app/modules/dipendente';
import { DipendenteService } from 'src/app/services/dipendente.service';

@Component({
  selector: 'app-dipendente',
  templateUrl: './dipendente.component.html',
  styleUrls: ['./dipendente.component.css']
})
export class DipendenteComponent implements OnInit{
  dipendente$!: Observable<Dipendente[]>;
  dipendenteId!: any;

  constructor(private router: ActivatedRoute, private servizioDipendente: DipendenteService) {};

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      this.dipendenteId = this.router.snapshot.paramMap.get('id');
      this.dipendente$ = this.servizioDipendente.getEmployeesByIdAzienda(this.dipendenteId)
    })
    console.log(this.dipendente$);

  }

  addEmployee() {

  }
}