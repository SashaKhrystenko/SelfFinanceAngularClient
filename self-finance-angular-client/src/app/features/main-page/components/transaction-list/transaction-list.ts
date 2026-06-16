import { Component, input } from '@angular/core';
import { TransactionModel } from '../../../../core/models/transaction.model';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  imports: [KeyValuePipe],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.scss',
})
export class TransactionSortedByDateListComponent {
  readonly transactions = input.required<Record<string, TransactionModel[]>>();
  readonly dateCount = input.required<number>();
}
