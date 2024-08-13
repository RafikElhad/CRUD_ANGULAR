import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // Redirection vers la liste par défaut
  { path: 'list', component: ListComponent },          // Route pour la liste des utilisateurs
  { path: 'add', component: AddComponent },            // Route pour ajouter un utilisateur
  { path: 'edit/:id', component: EditComponent }       // Route pour éditer un utilisateur par ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
