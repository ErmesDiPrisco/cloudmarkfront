import { Injectable } from '@angular/core';
import { Azienda } from '../modules/azienda';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/config';


@Injectable({
  providedIn: 'root'
})
export class AziendaService {
  aziende!: Azienda[];

  constructor(private http: HttpClient) {};
  // tutte le aziende
  getAllCompanies(): Observable<Azienda[]> {
    // return this.http.get<Azienda[]>(`${URL}/azienda/all`)
    return this.http.get<Azienda[]>("http://localhost:3000/")
  };
  // singola azienda by id
  getCompanyById(id: string) {
    return this.http.get<Azienda>(`${URL}/azienda/company?id=${id}`).pipe(tap((data)=>{console.log(data)}))
  };
  // aggiungi azienda
  addCompany(arg: any){
    return  this.http.post<Azienda[]>(`${URL}/azienda/new`, arg)
  };
  // elimina azienda
  deleteCompany(id: string){
    return this.http.delete<Azienda[]>(`${URL}/azienda/delete?company=${id}`)
  };
  // aggiorna azienda
  updateCompany(arg: any){
    return this.http.put<Azienda[]>(`${URL}/azienda/update`, arg)
  };
}


