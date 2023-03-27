import { DioAccount } from "./DioAccount";

export class FakeAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }

      deposit = (value:number): void => {
        if(this.getStatus()){
          this.balance += 10
          console.log(`Voce depositou 10 e o saldo atual é: ${this.balance}`)
        }
    }
}