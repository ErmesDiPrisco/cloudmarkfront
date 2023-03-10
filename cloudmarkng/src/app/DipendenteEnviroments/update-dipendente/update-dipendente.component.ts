import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update-dipendente',
  templateUrl: './update-dipendente.component.html',
  styleUrls: ['./update-dipendente.component.css']
})
export class UpdateDipendenteComponent {
@Input() dipendente_Id: any;
}
