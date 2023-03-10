import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/config';
import { Dipendente } from '../modules/dipendente';

@Injectable({
  providedIn: 'root'
})
export class DipendenteService {
  dipendenti!: Dipendente[];

  constructor(private http: HttpClient) { };

  // tutti i dipendenti
  getAllEmployees() {
    return this.http.get<Dipendente[]>(`${URL}/dipendente/all`)
  };
  // singolo dipendente tramite id
  getEmployeeById(id: string) {
    return this.http.get<Dipendente>(`${URL}/dipendente/employee?id=${id}`)
  };
  // aggiungi dipendente
  addEmployee(arg: object) {
    return this.http.post<Dipendente[]>(`${URL}/dipendente/new`, arg)
  };
  // trovare diversi dipendenti
  findMultipleEmployees(value:string, id:string) {
    return this.http.get<Dipendente[]>(`${URL}/dipendente/multiemployee?value=${value}&id=${id}`)
  };
  // aggiornare dipendente
  updateEmployee(arg: string) {
    return this.http.put<Dipendente>(`${URL}/dipendente/update`, arg)
  };
  // eliminare dipendnete
  deleteEmployee(id:string) {
    return this.http.delete<Dipendente>(`${URL}/dipendente/delete?dipendente=${id}`)
  };
  // tutti i dipendenti di un'unica azienda
  getEmployeesByIdAzienda(id:string) {
    return this.http.get<Dipendente[]>(`${URL}/dipendenteemployees_by_id_azienda?id=${id}`)
  }
  // link all'azionda
  linkToCompany(args: any){
    return this.http.post<any>(`${URL}/dipendente/link`, args)
  }

  deleteLink(id_dipendente: string, id_azienda: string){
    return this.http.delete<any>(`${URL}/dipendente/deletelink?id_dipendente=${id_dipendente}&id_azienda=${id_azienda}`)
  }
}
