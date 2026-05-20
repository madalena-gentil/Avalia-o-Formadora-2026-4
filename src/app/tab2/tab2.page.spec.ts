import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, CurrencyPipe } from '@angular/common';
import { ProductService } from '../services/product';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton, 
  IonRow, 
  IonCol, 
  IonLoading 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    CurrencyPipe,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton, 
    IonRow, 
    IonCol, 
    IonLoading
  ]
})
export class Tab2Page implements OnInit {
  currentIndex: number = 0;
  isLoading: boolean = true;

  constructor(public productService: ProductService) {}

  async ngOnInit() {
    try {
      // Executa a busca dos dados
      await this.productService.loadProducts();
    } catch (error) {
      console.error('Erro ao carregar na Tab 2:', error);
    } finally {
      this.isLoading = false;
    }
  }

  nextProduct() {
    if (this.productService.productsList.length > 0 && this.currentIndex < this.productService.productsList.length - 1) {
      this.currentIndex++;
    }
  }

  previousProduct() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}