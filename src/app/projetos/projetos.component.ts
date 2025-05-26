import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  tecnologiaSelecionada: string = '';

  projetos = [
    {
      nome: 'Fetch API',
      descricao: 'Exemplo de uso da Fetch API utilizado em sala de aula',
      tecnologias: ['JavaScript', 'Node.js'],
      link: 'https://github.com/guilherme-calixtocampos/fetch'
    },
    {
      nome: 'DOM Manipulation',
      descricao: 'Exemplo de manipulação do DOM com JavaScript',
      tecnologias: ['JavaScript'],
      link: 'https://github.com/guilherme-calixtocampos/fetch'
    },
    {
      nome: 'APP para cadastro de treino e execução',
      descricao: 'Desenvolvido app para cadastro de treino e execução do mesmo no aplicativo, com timer e notificações informando início e fim do treino',
      tecnologias: ['Java'],
      link: 'Desenvolvido app para cadastro de treino e execução do mesmo no aplicativo, com timer e notificações informando início e fim do treino'
    },
    {
      nome: 'Água Insights',
      descricao: 'Site com intuito de conscientizar o público infantil e jovem sobre a poluição e sobre o gasto de água',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/guilherme-calixtocampos/Agua-Insights'
    },
    {
      nome: 'Locadora',
      descricao: 'Desenvolvido sistema para locadoras, este programa tem como foco ajudar nos estudos e botar em prática o que venho aprendendo',
      tecnologias: ['Java'],
      link: 'https://github.com/guilherme-calixtocampos/Locadora'
    },
    {
      nome: 'Tela simples usando bootstrap',
      descricao: 'Tela simples usando bootstrap com intuíto de praticar o que aprendi',
      tecnologias: ['HTML', 'Bootstrap'],
      link: 'https://github.com/guilherme-calixtocampos/TelaBootstrap'
    },
    {
      nome: 'Portifolio',
      descricao: 'Desenvolvido e pensado em tudo que aprendi durando meu curso de Análise e Desenvolvimento de Sistemas, este portfólio tem como objetivo mostrar o que aprendi e o que venho aprendendo',
      tecnologias: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Bootstrap'],
      link: 'https://github.com/guilherme-calixtocampos/newPortifolio'
    }
  ];

  tecnologiasDisponiveis = ['Angular', 'HTML', 'CSS', 'JavaScript', 'Java', 'TypeScript', 'Bootstrap', 'Node.js'];

  projetosFiltrados() {
    if (!this.tecnologiaSelecionada) {
      return this.projetos;
    }
    return this.projetos.filter(projeto =>
      projeto.tecnologias.includes(this.tecnologiaSelecionada)
    );
  }
}
