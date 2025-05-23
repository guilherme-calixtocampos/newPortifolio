import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

tecnologias = [
  { nome: 'HTML', descricao: 'Linguagem de marcação usada para estruturar páginas na web.', nivel: 5 },
  { nome: 'CSS', descricao: 'Estiliza os elementos HTML, definindo cores, layouts e fontes.', nivel: 5 },
  { nome: 'Tailwind', descricao: 'Framework CSS utilitário que permite construir interfaces com rapidez.', nivel: 5 },
  { nome: 'SaSS', descricao: 'Pré-processador CSS que facilita a escrita de estilos mais organizados.', nivel: 4 },
  { nome: 'Bootstrap', descricao: 'Framework CSS com componentes prontos e responsivos para web.', nivel: 4 },
  { nome: 'JavaScript', descricao: 'Linguagem de programação que traz interatividade às páginas web.', nivel: 3 },
  { nome: 'Angular', descricao: 'Framework front-end baseado em componentes e TypeScript.', nivel: 3 },
  { nome: 'Node.js', descricao: 'Ambiente de execução JavaScript para servidor, com foco em APIs e serviços.', nivel: 2 },
  { nome: 'Java', descricao: 'Linguagem de programação usada para desenvolver sistemas e aplicações robustas.', nivel: 3 }
];

}
