import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TraducaoService } from '../api-traducao/services/traducao.service';


@Component({
  selector: 'app-menu-superior',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent {
  isDarkMode = false;
  menuOpen = false;

  idiomaSelecionado = 'pt';
  home = '';
  certificados = '';
  sobreMim = '';
  projetos = '';

  constructor(private traducaoService: TraducaoService) {}

  ngOnInit() {
    // Tema escuro
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      this.isDarkMode = true;
    }

    // Idioma salvo
    const lang = localStorage.getItem('lang') || 'pt';
    this.idiomaSelecionado = lang;

    // Inicializa tradução e subscreve mudanças
    this.traducaoService.traduzir(lang).subscribe();
    this.traducaoService.traducoes$.subscribe(trad => {
      if (trad) {
        this.home = trad.home;
        this.certificados = trad.certificados;
        this.sobreMim = trad.sobreMim;
        this.projetos = trad.projetos;
      }
    });
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.closeMenu();
  }

  trocarIdioma(idioma: string) {
    this.idiomaSelecionado = idioma;
    localStorage.setItem('lang', idioma);
    this.traducaoService.traduzir(idioma).subscribe();
    this.closeMenu();
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
