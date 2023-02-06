import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AziendaService } from '../services/azienda.service';
import { AziendaComponent } from '../azienda/azienda.component';
import { Azienda } from '../modules/azienda';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-azienda-details',
  templateUrl: './azienda-details.component.html',
  styleUrls: ['./azienda-details.component.css']
})
export class AziendaDetailsComponent implements OnInit{
  id!: string;
  azienda= this.aziendaService.getCompanyById(this.id);
  constructor(private route: ActivatedRoute, private aziendaService: AziendaService){

  }
  ngOnInit(): void {
    // this.route.queryParams
    // .subscribe(params => {
    //   this.id = params['company'];
    //   console.log(this.azienda);
    // }
    // );

    // this.azienda = this.aziendaService.getCompanyById(this.id)
    // console.log(this.azienda)
  }

}
