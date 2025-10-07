import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, 
         ReactiveFormsModule, Validators } from '@angular/forms';
import { DeputadoService } from '../model/deputado-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca {
  formBusca: FormGroup
  deputados: any[] = []
  loading = false

  fb: FormBuilder = inject(FormBuilder)
  ds: DeputadoService = inject(DeputadoService)
  constructor() {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  buscarPorNome() {
    if (this.formBusca.invalid) {
      this.formBusca.markAllAsTouched()
      return
    }
    const nome = this.formBusca.value['nome'];
    this.loading = true
    this.deputados = []
    this.ds.obterDeputadosPorNome(nome).subscribe({
      next: (res) => {
        this.deputados = res.dados || []
        this.loading = false
      },
      error: () => {
        this.deputados = []
        this.loading = false
      }
    })
  }
}
