import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TraducaoService } from '../api-traducao/services/traducao.service';

interface Habilidade { nome: string; nivel: number; }
interface Experiencia { cargo: string; empresa: string; periodo: string; descricao: string; }
interface Categoria { categoria: string; icon: string; }

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements OnInit {
  // Textos
  titulo = '';
  subtitulo = '';
  paragrafos: string[] = [];
  objetivo: string[] = [];
  objetivos: string[] = [];

  // Habilidades
  habilidadesTitulo = '';
  categorias: Categoria[] = [];
  habilidadesMap: Record<string, Habilidade[]> = {};

  // Experiências
  experienciasTitulo = '';
  experiencias: Experiencia[] = [];

  // Rodapé
  footerText = '';

  constructor(private traducaoService: TraducaoService) {}

  ngOnInit() {
    // Inscreve para receber traduções
    this.traducaoService.traducoes$.subscribe(trad => {
      if (!trad) return;
      this.titulo = trad.sobreMim_titulo;
      this.subtitulo = trad.sobreMim_subtitulo;
      this.paragrafos = trad.sobreMim_paragrafos;
      this.objetivo = trad.sobreMim_objetivos_titulo;
      this.objetivos = trad.sobreMim_objetivos;

      this.habilidadesTitulo = trad.habilidades_titulo;
      this.categorias = trad.habilidades_categorias;
      this.habilidadesMap = trad.habilidades_itens;

      this.experienciasTitulo = trad.experiencias_titulo;
      this.experiencias = trad.experiencias;

      this.footerText = trad.footer_text;
    });

    // Carrega a tradução inicial
    const lang = localStorage.getItem('lang') || 'pt';
    this.traducaoService.traduzir(lang).subscribe();
  }
}
