import { DecimalPipe } from '@angular/common';

export interface TransactionModel {
  date: Date;
  category: string;
  amount: DecimalPipe;
}
