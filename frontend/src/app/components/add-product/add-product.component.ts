import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  addForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      image: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addForm.valid) {
      const formData = this.addForm.value;

      this.productService.addProduct(formData)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }

}
