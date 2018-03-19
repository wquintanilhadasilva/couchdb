import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { EstadosBrService } from '../services/estados-br.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-couch-uf',
  templateUrl: './couch-uf.component.html',
  styleUrls: ['./couch-uf.component.css']
})
export class CouchUfComponent implements OnInit {

  @Input()
  onInsert: EventEmitter<any>;

  constructor(
    private formBuilder: FormBuilder,
    private services: EstadosBrService) { }

  rows: any[];

  frmCouch: FormGroup;

  ngOnInit() {

    this.loadUFs();

    this.frmCouch = this.formBuilder.group({
      id: [null, Validators.required],
      _id: [{value: null, disabled: false}, [Validators.required]],
      sigla: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      _rev: [{value: null, disabled: false}, [Validators.required]],
    });

    this.onInsert.subscribe(r => {
      this.loadUFs();
    });

  }

  onSubmitCouchDb() {
    if (this.frmCouch.valid) {
      this.services.saveDocCouchDb(this.frmCouch.value).subscribe(
        r => {
          console.log(r);
          this.loadUFs();
          this.resetar();
        }
      );
    }
  }

  selectRow(estado: models.EstadoBr) {
  // Arremenda apenas os atributos informados
  this.frmCouch.patchValue({
    id: estado.id,
    _id: estado._id,
    _rev: estado._rev,
    sigla: estado.sigla,
    nome: estado.nome
    });
  }

  deletRow(estado: models.EstadoBr) {
    this.services.deleteDocCouchDb(estado).subscribe( r => {
      console.log(r);
      this.loadUFs();
      this.resetar();
    });
  }

  verificaValidacoesDoFormulario(formGroup: FormGroup) {
    /**
     * Função recursiva que percorre todos os campos do form e marca os campos para validação
     */
    Object.keys(formGroup.controls).forEach(campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle.markAsTouched();
        if (controle instanceof FormGroup) {
          this.verificaValidacoesDoFormulario(controle);
        }
      });
  }

  resetar() {
    this.frmCouch.reset();
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  verificaValidTouched(campo) {
    return this.verificaInValid(campo) && this.verificaTouched(campo);
  }

  verificaTouched(campo) {
    return this.frmCouch.get(campo).touched && !this.frmCouch.get(campo).value;
  }

  verificaInValid(campo) {
    return !this.frmCouch.get(campo).valid && (this.frmCouch.get(campo).touched || this.frmCouch.get(campo).dirty);
  }

  loadUFs() {
    this.services.getCouchDbUfs().subscribe(r => this.rows = r);
  }

}
