import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-container">
      <h2>Formulário</h2>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="field">
          <label for="name">Nome:</label>
          <input id="name" formControlName="name" placeholder="Digite seu nome" />
          <div *ngIf="form.controls.name.touched && form.controls.name.invalid" class="error">
            Nome é obrigatório
          </div>
        </div>

        <div class="field">
          <label for="email">Email:</label>
          <input id="email" formControlName="email" placeholder="Digite seu email" />
          <div *ngIf="form.controls.email.touched && form.controls.email.errors" class="error">
            <span *ngIf="form.controls.email.errors['required']">Email é obrigatório</span>
            <span *ngIf="form.controls.email.errors['email']">Email inválido</span>
          </div>
        </div>

        <div class="buttons">
          <button type="submit">Enviar</button>
          <button type="button" (click)="form.reset()">Limpar</button>
        </div>
      </form>

      <div *ngIf="submittedData" class="result">
        <h3>Dados enviados:</h3>
        <pre>{{ submittedData | json }}</pre>
      </div>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 500px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .field {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .error {
      color: red;
      font-size: 14px;
      margin-top: 5px;
    }

    .buttons {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button[type="submit"] {
      background: #28a745;
      color: white;
    }

    button[type="button"] {
      background: #6c757d;
      color: white;
    }

    .result {
      margin-top: 20px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 4px;
    }

    pre {
      background: #e9ecef;
      padding: 10px;
      border-radius: 4px;
      overflow: auto;
    }
  `]
})
export class FormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  submittedData: any = null;

  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
    } else {
      this.form.markAllAsTouched();
    }
  }
}