import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstadosBrService } from '../services/estados-br.service';

@Component({
  selector: 'app-manter-uf',
  templateUrl: './manter-uf.component.html',
  styleUrls: ['./manter-uf.component.css']
})
export class ManterUfComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private service: EstadosBrService) { }

  ngOnInit() {

    const id: number = +this.route.snapshot.paramMap.get('id');
    this.service.getState(id).subscribe(uf => this.populaDadosForm(uf));

    this.formulario = this.formBuilder.group(
      {
        id: [null, Validators.required],
        sigla: [null, Validators.required],
        nome: [null, Validators.required]
      }
    );
  }

  onSubmit() {
    console.log(this.formulario);
  }

  populaDadosForm(dados: models.EstadoBr) {
    // Arremenda apenas os atributos informados
    this.formulario.patchValue({
      id: dados.id,
      sigla: dados.sigla,
      nome: dados.nome
    });
  }

}
