import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '/data.json'; // Replace with API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getMostWantedProducts(): Observable<Product[]> {
    return this.http
      .get<{ mostWantedProducts: Product[] }>(this.apiUrl)
      .pipe(map((response) => response.mostWantedProducts));
  }

  getNewArrivalProducts(): Observable<Product[]> {
    return this.http
      .get<{ newArrivalProducts: Product[] }>(this.apiUrl)
      .pipe(map((response) => response.newArrivalProducts));
  }

  // createProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.apiUrl, product);
  // }

  // updateProduct(id: string, product: Product): Observable<Product> {
  //   return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  // }

  // deleteProduct(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
