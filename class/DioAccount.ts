export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (value:number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Voce depositou ${value} e o saldo atual é: ${this.balance}`)
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus() && this.balance > value){
      this.balance -= value
      console.log('Voce sacou' + value+ 'e o saldo atual é:'+ this.balance)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  getStatus = (): boolean => {
    return this.status
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
