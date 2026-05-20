import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { ProductService } from '../services/product'; 
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonList, 
  IonItem, 
  IonThumbnail, 
  IonLabel 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    CurrencyPipe,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonList, 
    IonItem, 
    IonThumbnail, 
    IonLabel
  ]
})
export class Tab3Page implements OnInit {
  showList: boolean = false;

  constructor(public productService: ProductService) {}

  async ngOnInit() {
    await this.productService.loadProducts();
  }

  toggleList() {
    this.showList = !this.showList;
  }
}