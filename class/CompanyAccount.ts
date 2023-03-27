import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {
    if(this.getStatus())
    super.deposit(value)
    console.log(`${super.getName()} pegou empréstimo de R$ ${value} e o depositou na sua conta`)
  }
}
