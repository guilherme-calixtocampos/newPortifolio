import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TraducaoService } from '../api-traducao/services/traducao.service';

interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  tecnologiaSelecionada: string = '';

  // Textos e dados traduzidos
  titulo = '';
  descricao = '';
  filtroPlaceholder = '';
  botaoVer = '';
  tecnologiasDisponiveis: string[] = [];
  tecnologiaNomes: { [key: string]: string } = {};
  projetos: Projeto[] = [];

  constructor(private traducaoService: TraducaoService) {}

  ngOnInit() {
    this.traducaoService.traducoes$.subscribe(trad => {
      if (trad) {
        this.titulo = trad.tituloProjetos;
        this.descricao = trad.descricaoProjetos;
        this.filtroPlaceholder = trad.filtroPlaceholder;
        this.botaoVer = trad.botaoVerProjeto;
        this.tecnologiasDisponiveis = trad.tecnologiasDisponiveis;
        this.tecnologiaNomes = trad.tecnologiaNomes;
        this.projetos = trad.projetos_items;
      }
    });

    // chama a primeira tradução, se necessário
    const lang = localStorage.getItem('lang') || 'pt';
    this.traducaoService.traduzir(lang).subscribe();
  }

  projetosFiltrados(): Projeto[] {
    if (!this.tecnologiaSelecionada) return this.projetos;
    return this.projetos.filter(p =>
      p.tecnologias.includes(this.tecnologiaSelecionada)
    );
  }
}
