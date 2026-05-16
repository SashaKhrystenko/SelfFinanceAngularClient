import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens/api-url.token';
import { TransactionsSortedByDateModel } from '../models/transactions-sorted-by-date.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  readonly #httpClient = inject(HttpClient);
  readonly #apiUrl = inject(API_URL);

  public getTransactionsSortedByDate(): Observable<TransactionsSortedByDateModel[]> {
    return this.#httpClient.get<TransactionsSortedByDateModel[]>(
      `${this.#apiUrl}/financial-summary/get-all-transactions`,
    );
  }
}
