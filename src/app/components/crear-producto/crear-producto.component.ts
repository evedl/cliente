import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
//manejar mejor los formulario formbuilder, redirijir 
  constructor(private fb: FormBuilder,
               private router: Router,
               private toastr: ToastrService) {
   this.productoForm = this.fb.group({
     //configurar validaciones de elementos (rqueridos)
     producto: ['', Validators.required],
     categoria: ['', Validators.required],
     ubicacion: ['', Validators.required],
     precio: ['', Validators.required],
   }) 
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    //acceder a atributos q escribio el usuario
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }
    console.log(PRODUCTO);  
    //animacion mensaje
    this.toastr.success('El producto fue registrado con exito', 'Producto registrado');
    
    //ruta
    this.router.navigate(['/']);
  }

}
