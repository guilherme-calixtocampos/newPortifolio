import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {
  certificados = [
    { img: 'assets/c1.png', titulo: 'Buscando conhecimentos sobre HTML', descricao: 'Curso sobre fundamentos de HTML.' },
    { img: 'assets/c2.png', titulo: 'Aprendendo mais sobre estilização', descricao: 'Curso de CSS e layout responsivo.' },
    { img: 'assets/c3.png', titulo: 'Deixando minhas páginas mais interativas', descricao: 'Curso introdutório de JavaScript.' },
    { img: 'assets/c4.png', titulo: 'Aprendendo mais a fundo sobre estilização, tags e interação', descricao: 'Curso avançado de desenvolvimento web.' },
    { img: 'assets/certificado.png', titulo: 'Formação concluída', descricao: 'Conclusão de curso de Gestão de TI na Facens em Sorocaba.' }
  ];
}
