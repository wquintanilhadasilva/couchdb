import { Component, OnInit } from '@angular/core';
import { EstadosBrService } from '../services/estados-br.service';

@Component({
  selector: 'app-estados-br',
  templateUrl: './estados-br.component.html',
  styleUrls: ['./estados-br.component.css']
})
export class EstadosBrComponent implements OnInit {

  estados: models.EstadoBr[];

  constructor(private services: EstadosBrService) { }

  ngOnInit() {

    this.services.getStates().subscribe(e => this.estados = e);

  }

  selectUf(uf: models.EstadoBr) {
    console.log(uf);
  }

}
