import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  editForm!: FormGroup;
  productId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Configuración del formulario reactivo
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      image: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      
      if (this.productId) {

        this.productService.getProductById(this.productId)
          .subscribe(product => {
            this.editForm.patchValue(product);
          });
      }
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const formData = this.editForm.value;

      if (this.productId) {
        // Si hay un ID, realizar una actualización
        this.productService.updateProduct(this.productId, formData)
          .subscribe(() => this.router.navigate(['/products']));
      } else {
        // Si no hay un ID, realizar una creación
        this.productService.addProduct(formData)
          .subscribe(() => this.router.navigate(['/products']));
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}
