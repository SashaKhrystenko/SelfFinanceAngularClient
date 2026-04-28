import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  public title: string = 'Home Page';

  public showAlert(): void {
    alert(this.title);
  }
}
