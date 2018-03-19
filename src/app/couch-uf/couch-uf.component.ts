import { Component, OnInit } from '@angular/core';
import { EstadosBrService } from '../services/estados-br.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-couch-uf',
  templateUrl: './couch-uf.component.html',
  styleUrls: ['./couch-uf.component.css']
})
export class CouchUfComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private services: EstadosBrService) { }

  rows: any[];

  frmCouch: FormGroup;

  ngOnInit() {
    this.services.getCouchDbUfs().subscribe(r => this.rows = r);

    this.frmCouch = this.formBuilder.group({
      id: [null, Validators.required],
      _id: [{value: null, disabled: true}, [Validators.required, Validators.required]],
      sigla: [null, [Validators.required, Validators.required]],
      nome: [null, [Validators.required, Validators.required]]
    });

  }

  onSubmitCouchDb() {

  }

  selectRow(estado: models.EstadoBr) {
  // Arremenda apenas os atributos informados
  this.frmCouch.patchValue({
    id: estado.id,
    _id: estado._id,
    sigla: estado.sigla,
    nome: estado.nome
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

}
