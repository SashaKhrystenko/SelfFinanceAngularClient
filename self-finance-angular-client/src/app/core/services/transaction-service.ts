import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens/api-url.token';
import { Observable, tap } from 'rxjs';
import { TransactionModel } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  readonly #httpClient = inject(HttpClient);
  readonly #apiUrl = inject(API_URL);

  public getTransactionsSortedByDate(): Observable<Record<string, TransactionModel[]>> {
    const transactions: Observable<Record<string, TransactionModel[]>> = this.#httpClient.get<Record<string, TransactionModel[]>>(
      `${this.#apiUrl}/financial-summary/get-all-transactions`
    ).pipe(
      tap((transactions) => console.log(transactions))
    );

    return transactions;
  }
}
