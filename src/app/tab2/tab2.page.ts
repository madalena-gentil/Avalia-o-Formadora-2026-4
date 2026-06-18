import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, CurrencyPipe } from '@angular/common';
import { ProductService } from '../services/product';
import { FirebaseService } from '../services/firebase.service';
import { inject, runInInjectionContext } from '@angular/core'; 
import { EnvironmentInjector } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
  IonButton, IonRow, IonCol, IonLoading 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule, NgIf, CurrencyPipe, IonHeader, IonToolbar, 
    IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, 
    IonCardSubtitle, IonCardContent, IonButton, IonRow, IonCol, IonLoading
  ]
})
export class Tab2Page implements OnInit {
  currentIndex: number = 0;
  isLoading: boolean = true;

  constructor(
    public productService: ProductService,
    private firebaseService: FirebaseService 
  ) {}

  async ngOnInit() {
    await this.carregarDados();
  }

  async ionViewWillEnter() {
    await this.carregarDados();
  }

  async carregarDados() {
    try {
      this.isLoading = true;
      await this.productService.loadProducts();
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      this.isLoading = false;
    }
  }

  public async salvarNoFirebase() {
    console.log('Iniciando o salvamento...');
    const produto = this.productService.productsList[this.currentIndex];
    
    if (!produto) {
      console.error("Nenhum produto selecionado!");
      return;
    }

    try {
      await this.firebaseService.addProduto(produto);
      console.log('Sucesso! O dado foi enviado ao Firebase.');
    } catch (error) {
      console.error('ERRO DETECTADO:', error); 
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