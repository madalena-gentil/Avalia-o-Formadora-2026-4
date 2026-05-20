import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  public productsList: Product[] = [];

  constructor(private http: HttpClient) { }

  async loadProducts(): Promise<void> {
    try {
      if (this.productsList.length === 0) {
        this.productsList = await firstValueFrom(this.http.get<Product[]>(this.apiUrl));
        console.log('Produtos carregados com sucesso:', this.productsList.length);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos da API:', error);
    }
  }
}