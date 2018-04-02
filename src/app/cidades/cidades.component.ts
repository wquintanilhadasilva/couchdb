import { Component, OnInit } from '@angular/core';
import { MunicipiosBrService } from '../services/municipios-br.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cidades = [
    {nome: 'Goiânia', cep: '74000', exibir: true},
    {nome: 'Mato Grosso do Sul', cep: '88777', exibir: false},
    {nome: 'Carolina do Norte', cep: '65490', exibir: false},
    {nome: 'Pontalina', cep: '432987', exibir: false},
    {nome: 'Goytacazes', cep: '098765', exibir: false}
  ];

  selected ;

  constructor(private service: MunicipiosBrService) { }

  ngOnInit() {
    // console.log(this.cidades);
  }

  carregarCidades() {
    this.service.loadCitiesToCouchDb();
  }

  isActive(id) {
    return this.selected === id;
  }

 getSub(id) {
  this.selected = (this.selected === id ? null : id);
  }

}
