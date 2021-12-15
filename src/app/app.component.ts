import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application To Create and Manage Bank Accounts';

  bankAccounts:any[] = [];
  amounts:any;

  constructor(private service: AppService){}

  createAccount(){
  }

  getCustomerBankAccounts(customerId:String) {
		this.service.listCustomerAccount(customerId).subscribe(a=>{
      this.bankAccounts = a;
    });
}

  deleteAccounts(customerId:String) {
  this.service.deleteAccounts(customerId).subscribe(a=> {
  });
}

  createTransaction(originBank:string, originAccount:string, originName:string, 
    destinationBank:string, destinationAccount:string, destinationName:string, amount:String){

      let transaction = {
        originBank: originBank,
        originAccount: originAccount,
        originName: originName,
        destinationBank: destinationBank,
        destinationAccount: destinationAccount,
        amount:amount
      }

    this.service.createTransaction(transaction).subscribe(a=> {
    });
  }

  moneyReceivedAndSentInTransactions(customerId:String) {
		this.service.moneyReceivedAndSentInTransactions(customerId).subscribe(a=>{
      this.amounts = a;
    });
}
}
