import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Busca } from './busca/busca';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'busca', component: Busca },
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: PaginaNaoEncontrada} 
];
