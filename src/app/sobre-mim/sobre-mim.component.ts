import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {
  tecnologias = [
    { image: "" ,nome: 'HTML', descricao: 'Linguagem de marcação usada para estruturar páginas na web.', nivel: 5 },
    { image: "" ,nome: 'CSS', descricao: 'Estiliza os elementos HTML, definindo cores, layouts e fontes.', nivel: 5 },
    { image: "" ,nome: 'Tailwind', descricao: 'Framework CSS utilitário que permite construir interfaces com rapidez.', nivel: 5 },
    { image: "" ,nome: 'SaSS', descricao: 'Pré-processador CSS que facilita a escrita de estilos mais organizados.', nivel: 4 },
    { image: "" ,nome: 'Bootstrap', descricao: 'Framework CSS com componentes prontos e responsivos para web.', nivel: 4 },
    { image: "" ,nome: 'JavaScript', descricao: 'Linguagem de programação que traz interatividade às páginas web.', nivel: 3 }
  ];

  infraestruturas = [
  { nome: "Redes", descricao: "Conhecimento básico em redes de computadores, incluindo protocolos e topologias.", nivel: 3 },
  {nome: "Helpdesk", descricao: "Experiência em suporte técnico e resolução de problemas de hardware e software.", nivel: 5},
  {nome: "Hardware", descricao: "Conhecimento em montagem e manutenção de computadores e periféricos.", nivel: 4},
  {nome: "Sistemas Operacionais", descricao: "Experiência com Windows e Linux, incluindo instalação e configuração.", nivel: 4},
  {nome: "CFTV", descricao: "Conhecimento em instalação e configuração de sistemas de câmeras de segurança.", nivel: 2},
  {nome: "No-Break", descricao: "Experiência em instalação e manutenção de sistemas de energia ininterrupta.", nivel: 3}
]

ferramentas = [
  { nome: 'Git', descricao: 'Sistema de controle de versão distribuído para rastrear alterações no código.', nivel: 4 },
  { nome: 'GitHub', descricao: 'Plataforma de hospedagem de código-fonte e controle de versão usando Git.', nivel: 4 },
  { nome: 'Figma', descricao: 'Ferramenta de design colaborativo para criar interfaces e protótipos.', nivel: 3 },
  { nome: 'SAP', descricao: 'Sistema de gestão empresarial para integrar processos de negócios.', nivel: 3 },
  { nome: 'GeneXus', descricao: 'IDE low-code', nivel: 3 },
  { nome: 'Visual Studio Code', descricao: 'Editor de código-fonte leve e poderoso, com suporte a extensões.', nivel: 5 }
];
}
