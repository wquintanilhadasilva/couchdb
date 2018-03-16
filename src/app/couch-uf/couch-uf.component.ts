import { Component, OnInit } from '@angular/core';
import { EstadosBrService } from '../services/estados-br.service';

@Component({
  selector: 'app-couch-uf',
  templateUrl: './couch-uf.component.html',
  styleUrls: ['./couch-uf.component.css']
})
export class CouchUfComponent implements OnInit {

  constructor(private services: EstadosBrService) { }

  rows: any[];

  ngOnInit() {
    this.services.getCouchDbUfs().subscribe(r => this.rows = r);
  }

}
