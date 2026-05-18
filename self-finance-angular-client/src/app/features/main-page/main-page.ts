import { Component, computed, inject } from '@angular/core';
import { TransactionService } from '../../core/services/transaction-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TransactionSortedByDateListComponent } from './components/transaction-list/transaction-list';
import { TransactionModel } from '../../core/models/transaction.model';

@Component({
  selector: 'app-main-page',
  imports: [TransactionSortedByDateListComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  readonly #transactionService = inject(TransactionService);

  readonly transactions = toSignal(
    this.#transactionService.getTransactionsSortedByDate(),
    { initialValue: {} as Record<string, TransactionModel[]> }
  );

  readonly dateCount = computed(() => Object.keys(this.transactions()).length);

  public refreshTransactions(): void {
    console.log(this.transactions());
    console.log(this.dateCount());
  }
}
