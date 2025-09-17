import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="home">
      <h1>Bem-vindo ao Forms</h1>
      <p>Crie e gerencie formulários facilmente</p>
      <a routerLink="/form" class="btn">Ir para Formulário</a>
    </div>
  `,
  styles: [`
    .home {
      text-align: center;
      padding: 50px 20px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #333;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: #666;
    }

    .btn {
      display: inline-block;
      padding: 12px 24px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }

    .btn:hover {
      background: #0056b3;
    }
  `]
})
export class HomeComponent {}