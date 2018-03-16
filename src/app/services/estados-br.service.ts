import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class EstadosBrService {

  constructor(private http: HttpClient) { }

  public getStates(): Observable<models.EstadoBr[]> {

    return this.http.get<models.EstadoBr[]>('assets/data/ufs.json');

  }

  public getState(id: number): Observable<any> {
    return this.getStates().map(r => {

      for (const registro of r) {
        if (Number(registro.id) === id) {
          return registro;
        }
      }

      // for (let i = 0; i < r.length; i++) {
      //   if (Number(r[i].id) === id) {
      //     return r[i];
      //   }
      // }
      return null;
    });
  }

  public getCouchDbUfs(): Observable<models.EstadoBr[]> {
    return this.http.get('http://localhost:5984/estados/_design/estadosdoc/_view/_all')
        .map(json => {
          const retorno: models.EstadoBr[] = [];
          const o = json['rows'] as Array<any>;
          o.forEach(value => retorno.push(value['value']));
          return retorno;
        });
  }
}

