import { Component, OnInit } from '@angular/core';
import { MunicipiosBrService } from '../services/municipios-br.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  constructor(private service: MunicipiosBrService) { }

  ngOnInit() {
  }

  carregarCidades() {
    this.service.loadCitiesToCouchDb();
  }

}
