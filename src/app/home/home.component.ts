import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TraducaoService } from '../api-traducao/services/traducao.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tituloHome: string = '';
  descricao1Home: string = '';
  descricao2Home: string = '';

  constructor(private traducaoService: TraducaoService) {}

  ngOnInit() {
    // Inscreve para receber traduções sempre que o idioma muda
    this.traducaoService.traducoes$.subscribe(trad => {
      if (trad) {
        this.tituloHome = trad.tituloHome;
        this.descricao1Home = trad.descricao1Home;
        this.descricao2Home = trad.descricao2Home;
      }
    });
  }
}
