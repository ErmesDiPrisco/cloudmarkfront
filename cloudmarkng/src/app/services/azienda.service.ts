import { Injectable } from '@angular/core';
import { Azienda } from '../modules/azienda';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/config';

@Injectable({
  providedIn: 'root'
})
export class AziendaService {
  aziende!: Azienda[];

  constructor(private http: HttpClient) { 

  }

  getAllCompanies(): Observable<Azienda[]> {
    return this.http.get<Azienda[]>(`${URL}/azienda/all`)
  }

}


