import { Routes } from '@angular/router';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'certificados', component: CertificadosComponent },
    { path: 'sobreMim', component: SobreMimComponent },
    { path: '**', component: PaginaNaoEncontradaComponent }
];
