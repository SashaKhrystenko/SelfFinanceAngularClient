import { Component, input } from '@angular/core';
import { TransactionsSortedByDateModel } from '../../../../core/models/transactions-sorted-by-date.model';

@Component({
  selector: 'app-transaction-list',
  imports: [],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.scss',
})
export class TransactionSortedByDateListComponent {
  readonly transactions = input.required<TransactionsSortedByDateModel[]>();
}
