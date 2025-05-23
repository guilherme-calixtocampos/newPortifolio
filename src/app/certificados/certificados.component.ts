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
    { img: 'assets/c1.png', titulo: 'Certificado 1', descricao: 'Curso sobre fundamentos de HTML.' },
    { img: 'assets/c2.png', titulo: 'Certificado 2', descricao: 'Curso de CSS e layout responsivo.' },
    { img: 'assets/c3.png', titulo: 'Certificado 3', descricao: 'Curso introdutório de JavaScript.' },
    { img: 'assets/c4.png', titulo: 'Certificado 4', descricao: 'Curso avançado de desenvolvimento web.' }
  ];
}
