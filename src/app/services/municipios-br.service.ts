import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MunicipiosBrService {

  constructor(private http: HttpClient) { }

  public getCities(): Observable<models.CidadeBr[]> {

    return this.http.get<models.CidadeBr[]>('assets/data/municipio.json');

  }

  public getCitie(id: number): Observable<any> {
    return this.getCities().map(r => {

      for (const registro of r) {
        if (Number(registro.ibgeCityCode) === id) {
          return registro;
        }
      }
      return null;
    });
  }

  public getCouchDbUfs(): Observable<models.CidadeBr[]> {
    return this.http.get('http://10.1.194.161:5984/tecno3t-cities/_design/cidadesdoc/_view/_all')
        .map(json => {
          const retorno: models.CidadeBr[] = [];
          const o = json['rows'] as Array<any>;
          o.forEach(value => retorno.push(value['value']));
          return retorno;
        });
  }

  public saveDocCouchDb(cidade: models.CidadeBr): Observable<any> {
    return this.http.post('http://10.1.194.161:5984/tecno3t-cities', cidade);
  }

  public deleteDocCouchDb(cidade: models.CidadeBr): Observable<any> {
    return this.http.delete(`http://10.1.194.161:5984/tecno3t-cities/${cidade._id}?rev=${cidade._rev}`);
  }

  public loadCitiesToCouchDb(): void {
    this.getCities().subscribe(r => {
      console.log(r);
      r.forEach( c => {
        console.log(c);
        this.saveDocCouchDb(c).subscribe( x => console.log(x));
      });
    });
  }

}
