import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './core/layout/nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('self-finance-angular-client');
}
