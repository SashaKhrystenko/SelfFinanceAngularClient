import { TransactionModel } from './transaction.model';

export interface TransactionsSortedByDateModel {
  date: Date;
  transactions: TransactionModel[];
}
