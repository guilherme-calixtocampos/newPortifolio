import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

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

infraestruturas = [
  { nome: "Redes", descricao: "Conhecimento básico em redes de computadores, incluindo protocolos e topologias.", nivel: 2 },
  {nome: "Helpdesk", descricao: "Experiência em suporte técnico e resolução de problemas de hardware e software.", nivel: 3},
  {nome: "Hardware", descricao: "Conhecimento em montagem e manutenção de computadores e periféricos.", nivel: 3},
  {nome: "Sistemas Operacionais", descricao: "Experiência com Windows e Linux, incluindo instalação e configuração.", nivel: 3},
  {nome: "CFTV", descricao: "Conhecimento em instalação e configuração de sistemas de câmeras de segurança.", nivel: 2},
  {nome: "No-Break", descricao: "Experiência em instalação e manutenção de sistemas de energia ininterrupta.", nivel: 2}
]

ferramentas = [
  { nome: 'Git', descricao: 'Sistema de controle de versão distribuído para rastrear alterações no código.', nivel: 4 },
  { nome: 'GitHub', descricao: 'Plataforma de hospedagem de código-fonte e controle de versão usando Git.', nivel: 4 },
  { nome: 'Figma', descricao: 'Ferramenta de design colaborativo para criar interfaces e protótipos.', nivel: 4 },
  { nome: 'SAP', descricao: 'Sistema de gestão empresarial para integrar processos de negócios.', nivel: 3 },
  { nome: 'GeneXus', descricao: 'IDE low-code', nivel: 3 },
  { nome: 'Visual Studio Code', descricao: 'Editor de código-fonte leve e poderoso, com suporte a extensões.', nivel: 4 }
];



}
