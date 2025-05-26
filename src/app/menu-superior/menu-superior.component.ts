import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css'
})
export class MenuSuperiorComponent {
  isDarkMode = false;

toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  this.isDarkMode = !this.isDarkMode;

  // opcional: salvar no localStorage
  localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
}

ngOnInit() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    this.isDarkMode = true;
  }
}

}
