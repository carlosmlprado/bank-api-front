import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  uriAccount = 'http://localhost:8080/api/account/';
  uriTransaction = 'http://localhost:8080/api/transaction/';

  constructor(private http: HttpClient) { }

  listCustomerAccount(customerId:String) {
    return this.http.get<any[]>(`${this.uriAccount}` + 'listCustomerAccount/' + customerId);
  }

  deleteAccounts(customerId:String) {
    return this.http.delete(`${this.uriAccount}` + 'deleteAccounts/' + customerId);
  }

  createTransaction(transaction: Object) {
    return this.http.post(`${this.uriTransaction}` + 'createTransaction', transaction);
  }

  moneyReceivedAndSentInTransactions(customerId:String) {
    return this.http.get<any[]>(`${this.uriTransaction}` + 'moneyReceivedAndSentInTransactions/' + customerId);
  }
}
