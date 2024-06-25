import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  cards = [
    { name: 'Sakarias Armchair', image: 'assets/Chairs/chair1.svg', price:'$ 323' },
    { name: 'Baltsar Chair', image: 'assets/Chairs/chair2.svg', price:'$ 299' },
    { name: 'Anjay Chair', image: 'assets/Chairs/chair3.svg', price:'$ 519' },
    { name: 'Nyantuy Chair', image: 'assets/Chairs/chair4.svg', price:'$921' }
  ];


}
