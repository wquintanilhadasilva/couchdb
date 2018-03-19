import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      return null;
    });
  }

  public getCouchDbUfs(): Observable<models.EstadoBr[]> {
    return this.http.get('http://10.1.194.161:5984/estados/_design/estadosdoc/_view/_all')
        .map(json => {
          const retorno: models.EstadoBr[] = [];
          const o = json['rows'] as Array<any>;
          o.forEach(value => retorno.push(value['value']));
          return retorno;
        });
  }

  public saveDocCouchDb(estado: models.EstadoBr): Observable<any> {
    return this.http.post('http://10.1.194.161:5984/estados', estado);
  }

  public deleteDocCouchDb(estado: models.EstadoBr): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'If-Match':  estado._rev,
        'Content-Type': 'application/json'
      })
    };
    console.log(httpOptions);
    return this.http.delete(`http://10.1.194.161:5984/estados/${estado._id}?rev=${estado._rev}`);
  }

}

