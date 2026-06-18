import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private firestore = inject(Firestore);
  private colRef = collection(this.firestore, 'produtos');

  // CREATE
  async addProduto(produto: any) {
    return await addDoc(this.colRef, produto);
  }

  // READ (Retorna um Observable para atualizar a tela automaticamente)
  getProdutos(): Observable<any[]> {
    return collectionData(this.colRef, { idField: 'id' });
  }

  // UPDATE
  async updateProduto(id: string, produto: any) {
    const docRef = doc(this.firestore, `produtos/${id}`);
    return await updateDoc(docRef, produto);
  }

  // DELETE
  async deleteProduto(id: string) {
    const docRef = doc(this.firestore, `produtos/${id}`);
    return await deleteDoc(docRef);
  }
}