import { Component, inject } from '@angular/core';
import { TransactionService } from '../../core/services/transaction-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TransactionSortedByDateListComponent } from './components/transaction-list/transaction-list';
import { TransactionsSortedByDateModel } from '../../core/models/transactions-sorted-by-date.model';

@Component({
  selector: 'app-main-page',
  imports: [TransactionSortedByDateListComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  readonly #transactionService = inject(TransactionService);

  readonly transactions = toSignal(this.#transactionService.getTransactionsSortedByDate(), {
    initialValue: [] as TransactionsSortedByDateModel[],
  });
}
