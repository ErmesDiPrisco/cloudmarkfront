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
  getCompanyById(id: string) {
    return this.http.get<Azienda[]>(`${URL}/azienda/company?id=${id}`)
  }

  addCompany(arg: any){
        return  this.http.post<Azienda[]>(`${URL}/azienda/new`, arg)
  }

  deleteCompany(id: string){
    return this.http.delete<Azienda[]>(`${URL}/azienda/delete?company=${id}`)
  }
  updateCompany(arg: any){
    return this.http.put<Azienda[]>(`${URL}/azienda/update`, arg)
  }
}


