import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  // rutas para redirigir la pagina 
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  // lleva el id del producto
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  
  //lugar a donde se van a renderizar estas rutas
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
