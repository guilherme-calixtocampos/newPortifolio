import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TraducaoService } from '../api-traducao/services/traducao.service';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {
  tituloPagina: string = 'Meus Certificados';
  certificados: Array<{ img: string; titulo: string; descricao: string }> = [];

  constructor(private traducaoService: TraducaoService) {}

  ngOnInit() {
    this.traducaoService.traducoes$.subscribe(trad => {
      if (trad) {
        this.tituloPagina = trad.tituloCertificados || this.tituloPagina;
        // Se existir array de certificados em `trad`, usar; senão mantém os padrões
        this.certificados = trad.certificados_items || this.certificados;
      }
    });
    // Se quiser carregar imediato, já foi chamado lá no MenuSuperior
  }
}
