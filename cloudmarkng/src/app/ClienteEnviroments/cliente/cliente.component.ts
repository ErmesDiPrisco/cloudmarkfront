import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modules/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  cliente$!: Observable<Cliente[]>;
  clienteId!: any;

  constructor(private router: ActivatedRoute, private servizioCliente: ClienteService){};

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      this.clienteId = this.router.snapshot.paramMap.get('id');
      this.cliente$ = this.servizioCliente.getCustomersByAzienda(this.clienteId)
    })
    console.log(this.cliente$);

  }

  addCustomers(){}
}
